import { useState, useEffect } from 'react';

const useCMSContent = (path) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        
        // Handle different path types
        if (path.endsWith('/')) {
          // Directory path - try to fetch an index file or return empty array
          try {
            const indexResponse = await fetch(`${path}index.json`);
            if (indexResponse.ok) {
              const indexData = await indexResponse.json();
              setContent(indexData);
            } else {
              // No index file, return empty array for now
              // In a real CMS, this would fetch all files in the directory
              setContent([]);
            }
          } catch {
            setContent([]);
          }
        } else {
          // Single file path
          const response = await fetch(path);
          if (response.ok) {
            const data = await response.json();
            setContent(data);
          } else {
            // File doesn't exist yet, return null
            setContent(null);
          }
        }
      } catch (err) {
        console.log('Content not found:', path);
        setContent(null);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (path) {
      fetchContent();
    }
  }, [path]);

  return { content, loading, error };
};

// Helper hook for loading multiple content files
export const useMultipleContent = (basePath, fileNames = []) => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMultipleContent = async () => {
      try {
        setLoading(true);
        const promises = fileNames.map(async (fileName) => {
          try {
            const response = await fetch(`${basePath}${fileName}`);
            if (response.ok) {
              return await response.json();
            }
            return null;
          } catch {
            return null;
          }
        });

        const results = await Promise.all(promises);
        const validResults = results.filter(result => result !== null);
        setContent(validResults);
      } catch (err) {
        setError(err);
        setContent([]);
      } finally {
        setLoading(false);
      }
    };

    if (fileNames.length > 0) {
      fetchMultipleContent();
    } else {
      setLoading(false);
    }
  }, [basePath, fileNames]);

  return { content, loading, error };
};

export default useCMSContent;

