import React from 'react';
import { BookOpen, Users, Award, Target, Clock, MapPin } from 'lucide-react';
import useCMSContent from '../lib/useCMSContent';

const AboutPage = () => {
  const { content: pageContent, loading } = useCMSContent('/content/pages/about.json');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner h-12 w-12 mx-auto mb-4"></div>
          <p className="text-white">Loading...</p>
        </div>
      </div>
    );
  }

  // Default content if CMS data isn't available
  const defaultContent = {
    title: "About Sengani Girls School",
    description: "Learn about our history, mission, and commitment to excellence in education.",
    history: {
      title: "Our History",
      content: "Established in 1985, Sengani Girls School has been a beacon of educational excellence in Tamil Nadu for nearly four decades. Founded with the vision of empowering young women through quality education, our school has grown from a small institution to one of the most respected educational establishments in the region."
    },
    mission: {
      title: "Our Mission",
      content: "To provide comprehensive education that nurtures academic excellence, character development, and leadership skills, preparing young women to become confident, capable, and compassionate leaders of tomorrow."
    },
    vision: {
      title: "Our Vision",
      content: "To be the premier educational institution that empowers young women to achieve their full potential and make meaningful contributions to society through knowledge, values, and service."
    },
    values: [
      {
        title: "Excellence",
        description: "We strive for the highest standards in all aspects of education and personal development."
      },
      {
        title: "Integrity",
        description: "We uphold honesty, transparency, and ethical behavior in all our interactions."
      },
      {
        title: "Respect",
        description: "We value diversity and treat every individual with dignity and respect."
      },
      {
        title: "Innovation",
        description: "We embrace new ideas and methods to enhance learning and growth."
      }
    ],
    achievements: [
      {
        title: "Academic Excellence",
        description: "Consistently achieving 95%+ pass rates in board examinations"
      },
      {
        title: "State Recognition",
        description: "Recognized as one of the top schools in Tamil Nadu"
      },
      {
        title: "Alumni Success",
        description: "Our graduates excel in various fields including medicine, engineering, and public service"
      }
    ]
  };

  const content = pageContent || defaultContent;

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

        {/* History Section */}
        <div className="mb-16">
          <div className="card max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mr-4">
                <Clock className="w-6 h-6 text-yellow-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">{content.history.title}</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              {content.history.content}
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="card hover-scale">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-yellow-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">{content.mission.title}</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {content.mission.content}
            </p>
          </div>

          <div className="card hover-scale">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mr-4">
                <Award className="w-6 h-6 text-yellow-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">{content.vision.title}</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {content.vision.content}
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.values.map((value, index) => (
              <div key={index} className="card text-center hover-scale">
                <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.achievements.map((achievement, index) => (
              <div key={index} className="card text-center hover-scale hover-glow">
                <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Location & Contact */}
        <div className="card max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mr-4">
              <MapPin className="w-6 h-6 text-yellow-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Visit Our Campus</h2>
          </div>
          <p className="text-gray-300 mb-6">
            We welcome you to visit our beautiful campus and experience the Sengani Girls School difference firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Schedule a Visit
            </button>
            <button className="btn-secondary">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

