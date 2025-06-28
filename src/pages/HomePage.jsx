import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award, Calendar, GraduationCap, Phone, MapPin } from 'lucide-react';
import useCMSContent from '../lib/useCMSContent';

const HomePage = () => {
  const { content: pageContent, loading } = useCMSContent('/content/pages/home.json');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // FIXED: Button handlers
  const handleLearnMore = () => {
    window.location.href = '/about';
  };

  const handleApplyAdmission = () => {
    window.location.href = '/admissions';
  };

  const handleScheduleVisit = () => {
    window.location.href = '/contact';
  };

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

  return (
    <div className="section">
      {/* Hero Section */}
      <div className="container mx-auto px-4 text-center mb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            {pageContent?.title || "Empowering young women through quality education and holistic development"}
          </h1>
          
          {/* FIXED: Learn More Button */}
          <button 
            onClick={handleLearnMore}
            className="btn-primary text-lg px-8 py-4 hover:scale-105 transition-transform inline-flex items-center"
          >
            Learn More
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 mb-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Nurturing Excellence
        </h2>
        <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          Sengani Girls School is dedicated to providing a supportive and enriching environment 
          where young women can develop their academic abilities, character, and leadership skills.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="card text-center hover-scale">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Academic Excellence</h3>
            <p className="text-gray-300">Comprehensive curriculum designed to foster critical thinking and academic achievement.</p>
          </div>

          <div className="card text-center hover-scale">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Holistic Education</h3>
            <p className="text-gray-300">Balanced approach combining academics with character development and life skills.</p>
          </div>

          <div className="card text-center hover-scale">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Supportive Community</h3>
            <p className="text-gray-300">Nurturing environment where every student feels valued and supported.</p>
          </div>

          <div className="card text-center hover-scale">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Leadership Development</h3>
            <p className="text-gray-300">Opportunities to develop leadership skills and confidence for future success.</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="container mx-auto px-4 mb-20">
        <div className="card text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Community of Excellence
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover how Sengani Girls School can help your daughter reach her full potential 
            through quality education and character development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* FIXED: Apply for Admission Button */}
            <button 
              onClick={handleApplyAdmission}
              className="btn-primary text-lg px-8 py-4 hover:scale-105 transition-transform inline-flex items-center justify-center"
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              Apply for Admission
            </button>
            
            {/* FIXED: Schedule a Visit Button */}
            <button 
              onClick={handleScheduleVisit}
              className="btn-secondary text-lg px-8 py-4 hover:scale-105 transition-transform inline-flex items-center justify-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Visit
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="container mx-auto px-4 mb-20">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="card">
            <div className="text-4xl font-bold text-yellow-400 mb-2">25+</div>
            <div className="text-white font-semibold mb-2">Years of Excellence</div>
            <div className="text-gray-300 text-sm">Serving the community since 1985</div>
          </div>
          <div className="card">
            <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
            <div className="text-white font-semibold mb-2">Students</div>
            <div className="text-gray-300 text-sm">Currently enrolled across all grades</div>
          </div>
          <div className="card">
            <div className="text-4xl font-bold text-yellow-400 mb-2">95%</div>
            <div className="text-white font-semibold mb-2">Success Rate</div>
            <div className="text-gray-300 text-sm">In board examinations</div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4">
        <div className="card max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-yellow-400 mr-3" />
              <div>
                <div className="text-white font-semibold">Phone</div>
                <div className="text-gray-300">+91 98765 43210</div>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-yellow-400 mr-3" />
              <div>
                <div className="text-white font-semibold">Location</div>
                <div className="text-gray-300">Sengani Village, Dharmapuri</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
