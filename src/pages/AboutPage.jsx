import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, BookOpen, Heart, Calendar, Phone, Mail, MapPin } from 'lucide-react';
import useCMSContent from '../lib/useCMSContent';

const AboutPage = () => {
  const { content: pageContent, loading } = useCMSContent('/content/pages/about.json');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // FIXED: Button handlers
  const handleScheduleVisit = () => {
    window.location.href = '/contact';
  };

  const handleContactUs = () => {
    window.location.href = '/contact';
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner h-12 w-12 mx-auto mb-4"></div>
          <p className="text-white">Loading about information...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            {pageContent?.title || "About Sengani Girls School"}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {pageContent?.description || "Empowering young women through quality education and character development since 1985."}
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="card">
            <div className="flex items-center mb-4">
              <Heart className="w-8 h-8 text-yellow-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To provide quality education that empowers young women to become confident, 
              compassionate, and capable leaders who contribute positively to society. 
              We strive to create an environment that fosters academic excellence, 
              character development, and lifelong learning.
            </p>
          </div>

          <div className="card">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-yellow-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To be a leading educational institution that nurtures young women to reach 
              their full potential and become change-makers in their communities. 
              We envision graduates who are academically accomplished, socially responsible, 
              and equipped with the skills to thrive in a rapidly changing world.
            </p>
          </div>
        </div>

        {/* History */}
        <div className="mb-16">
          <div className="card">
            <div className="flex items-center mb-6">
              <BookOpen className="w-8 h-8 text-yellow-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">Our History</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Founded in 1985</h3>
                <p className="text-gray-300 mb-4">
                  Sengani Girls School was established with the vision of providing quality education 
                  to young women in rural Tamil Nadu. What started as a small institution with just 
                  50 students has grown into a thriving educational community.
                </p>
                <p className="text-gray-300">
                  Over the decades, we have maintained our commitment to academic excellence while 
                  adapting to modern educational needs and technologies.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Growth & Development</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• 1985: School founded with 50 students</li>
                  <li>• 1990: Added secondary education (Classes 6-10)</li>
                  <li>• 1995: Introduced higher secondary (Classes 11-12)</li>
                  <li>• 2000: CBSE affiliation obtained</li>
                  <li>• 2010: Modern science and computer labs established</li>
                  <li>• 2020: Digital learning infrastructure implemented</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <div className="card">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Excellence</h3>
                <p className="text-gray-300 text-sm">Striving for the highest standards in education and character development.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
                <p className="text-gray-300 text-sm">Building strong relationships and fostering a sense of belonging.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Compassion</h3>
                <p className="text-gray-300 text-sm">Developing empathy and understanding for others in our community.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Integrity</h3>
                <p className="text-gray-300 text-sm">Upholding honesty, transparency, and ethical behavior in all we do.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <div className="card">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Achievements</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">95%</div>
                <div className="text-white font-semibold mb-2">Board Exam Success Rate</div>
                <div className="text-gray-300 text-sm">Consistently high performance in CBSE examinations</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
                <div className="text-white font-semibold mb-2">Awards & Recognition</div>
                <div className="text-gray-300 text-sm">State and national level achievements</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-white font-semibold mb-2">Alumni Success Stories</div>
                <div className="text-gray-300 text-sm">Graduates excelling in various fields</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-16">
          <div className="card text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">
              Experience Our School Community
            </h2>
            <p className="text-gray-300 mb-8">
              We invite you to visit our campus and see firsthand the nurturing environment 
              where young women grow into confident, capable leaders.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* FIXED: Schedule a Visit Button */}
              <button 
                onClick={handleScheduleVisit}
                className="btn-primary hover:scale-105 transition-transform inline-flex items-center justify-center"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a Visit
              </button>
              
              {/* FIXED: Contact Us Button */}
              <button 
                onClick={handleContactUs}
                className="btn-secondary hover:scale-105 transition-transform inline-flex items-center justify-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="card max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-yellow-400 mr-3" />
              <div>
                <div className="text-white font-semibold">Phone</div>
                <div className="text-gray-300">+254 707 123456</div>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-yellow-400 mr-3" />
              <div>
                <div className="text-white font-semibold">Email</div>
                <div className="text-gray-300">senganigirlsschool@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center md:col-span-2">
              <MapPin className="w-5 h-5 text-yellow-400 mr-3" />
              <div>
                <div className="text-white font-semibold">Address</div>
                <div className="text-gray-300">Sengani Village, Matungulu Sub-County, Machakos County-Kenya</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
