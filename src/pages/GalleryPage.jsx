import React, { useState } from 'react';
import { Image, Video, Calendar, Eye, Download } from 'lucide-react';
import useCMSContent from '../lib/useCMSContent';

const GalleryPage = () => {
  const { content: pageContent, loading: pageLoading } = useCMSContent('/content/pages/gallery.json');
  const { content: photosData, loading: photosLoading } = useCMSContent('/content/gallery/photos/');
  const { content: videosData, loading: videosLoading } = useCMSContent('/content/gallery/videos/');
  const [activeTab, setActiveTab] = useState('photos');
  const [selectedCategory, setSelectedCategory] = useState('All');

  if (pageLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner h-12 w-12 mx-auto mb-4"></div>
          <p className="text-white">Loading gallery...</p>
        </div>
      </div>
    );
  }

  // Mock gallery data
  const mockPhotos = [
    {
      title: "Annual Day 2024",
      image: "/images/gallery/annual-day-2024.jpg",
      category: "Events",
      date: "2024-12-10"
    },
    {
      title: "Science Fair",
      image: "/images/gallery/science-fair.jpg",
      category: "Academic",
      date: "2024-12-08"
    },
    {
      title: "Sports Day",
      image: "/images/gallery/sports-day.jpg",
      category: "Sports",
      date: "2024-11-15"
    }
  ];

  const mockVideos = [
    {
      title: "School Tour 2024",
      thumbnail: "/images/gallery/school-tour-thumb.jpg",
      video: "/videos/school-tour-2024.mp4",
      category: "Campus",
      date: "2024-12-01"
    }
  ];

  const photos = photosData || mockPhotos;
  const videos = videosData || mockVideos;
  const categories = ['All', 'Events', 'Academic', 'Sports', 'Campus', 'Cultural'];

  const filteredPhotos = selectedCategory === 'All' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const filteredVideos = selectedCategory === 'All' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  return (
    <div className="section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            {pageContent?.title || "Gallery"}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {pageContent?.description || "Explore our vibrant school life through photos and videos."}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('photos')}
              className={`flex items-center px-6 py-2 rounded-lg transition-colors ${
                activeTab === 'photos'
                  ? 'bg-yellow-400 text-purple-900'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Image className="w-4 h-4 mr-2" />
              Photos
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex items-center px-6 py-2 rounded-lg transition-colors ${
                activeTab === 'videos'
                  ? 'bg-yellow-400 text-purple-900'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Video className="w-4 h-4 mr-2" />
              Videos
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-yellow-400 text-purple-900'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Photos Tab */}
        {activeTab === 'photos' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, index) => (
              <div key={index} className="card hover-scale group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={photo.image} 
                    alt={photo.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="btn-primary">
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </button>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{photo.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span className="badge badge-secondary">{photo.category}</span>
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(photo.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === 'videos' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video, index) => (
              <div key={index} className="card hover-scale group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <button className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <Video className="w-8 h-8 text-purple-900" />
                    </button>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{video.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span className="badge badge-secondary">{video.category}</span>
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(video.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Content Message */}
        {((activeTab === 'photos' && filteredPhotos.length === 0) || 
          (activeTab === 'videos' && filteredVideos.length === 0)) && (
          <div className="text-center py-16">
            <div className="card max-w-md mx-auto">
              <h3 className="text-xl font-bold text-white mb-4">No Content Found</h3>
              <p className="text-gray-300 mb-6">
                No {activeTab} found in the "{selectedCategory}" category.
              </p>
              <button 
                onClick={() => setSelectedCategory('All')}
                className="btn-primary"
              >
                View All {activeTab}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;

