import React from 'react';
import { Users, Heart, Music, Palette, Trophy, Camera } from 'lucide-react';
import useCMSContent from '../lib/useCMSContent';

const StudentLifePage = () => {
  const { content: pageContent, loading } = useCMSContent('/content/pages/student-life.json');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner h-12 w-12 mx-auto mb-4"></div>
          <p className="text-white">Loading student life...</p>
        </div>
      </div>
    );
  }

  // Default content
  const defaultContent = {
    title: "Student Life",
    description: "Experience a vibrant campus life filled with opportunities for growth, friendship, and discovery.",
    activities: [
      {
        title: "Cultural Programs",
        description: "Dance, music, drama, and art competitions throughout the year",
        icon: "Music"
      },
      {
        title: "Sports & Athletics",
        description: "Various sports activities and inter-school competitions",
        icon: "Trophy"
      },
      {
        title: "Clubs & Societies",
        description: "Science club, literary society, environmental club, and more",
        icon: "Users"
      },
      {
        title: "Community Service",
        description: "Social service activities and community outreach programs",
        icon: "Heart"
      },
      {
        title: "Art & Craft",
        description: "Creative workshops and artistic expression opportunities",
        icon: "Palette"
      },
      {
        title: "Photography Club",
        description: "Capture memories and develop photography skills",
        icon: "Camera"
      }
    ]
  };

  const content = pageContent || defaultContent;

  const getIcon = (iconName) => {
    const icons = { Users, Heart, Music, Palette, Trophy, Camera };
    return icons[iconName] || Users;
  };

  return (
    <div className="section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            {content.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {content.description}
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid-responsive">
          {content.activities.map((activity, index) => {
            const IconComponent = getIcon(activity.icon);
            return (
              <div key={index} className="card hover-scale hover-glow text-center">
                <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {activity.title}
                </h3>
                <p className="text-gray-300">
                  {activity.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StudentLifePage;

