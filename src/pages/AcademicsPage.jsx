import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, Calendar, Download, ExternalLink, ChevronRight, GraduationCap, Clock, MapPin } from 'lucide-react';
import useCMSContent from '../lib/useCMSContent';

const AcademicsPage = () => {
  const { content: pageContent, loading } = useCMSContent('/content/pages/academics.json');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner h-12 w-12 mx-auto mb-4"></div>
          <p className="text-white">Loading academics information...</p>
        </div>
      </div>
    );
  }

  // FIXED: Button handlers for all functionality
  const handleApplyAdmission = () => {
    window.location.href = '/admissions';
  };

  const handleDownloadProspectus = () => {
    window.location.href = '/downloads';
  };

  const handleViewAllFaculty = () => {
    window.location.href = '/faculty';
  };

  const handleContactHR = () => {
    window.location.href = '/contact';
  };

  const handleCareerOpportunities = () => {
    window.location.href = '/downloads';
  };

  const handleDownloadApplication = () => {
    window.location.href = '/downloads';
  };

  const handleScheduleVisit = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            {pageContent?.title || "Academics"}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {pageContent?.description || "Comprehensive education designed to nurture academic excellence and character development."}
          </p>
        </div>

        {/* Curriculum Section */}
        <div className="mb-16">
          <div className="card">
            <div className="flex items-center mb-6">
              <BookOpen className="w-8 h-8 text-yellow-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">Curriculum</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Academic Programs</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-yellow-400 mr-2" />
                    Primary Education (Classes 1-5)
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-yellow-400 mr-2" />
                    Secondary Education (Classes 6-10)
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-yellow-400 mr-2" />
                    Higher Secondary (Classes 11-12)
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-yellow-400 mr-2" />
                    Science Stream
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-yellow-400 mr-2" />
                    Commerce Stream
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-yellow-400 mr-2" />
                    Arts Stream
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <Award className="w-4 h-4 text-yellow-400 mr-2" />
                    CBSE Affiliated Curriculum
                  </li>
                  <li className="flex items-center">
                    <Award className="w-4 h-4 text-yellow-400 mr-2" />
                    Experienced Faculty
                  </li>
                  <li className="flex items-center">
                    <Award className="w-4 h-4 text-yellow-400 mr-2" />
                    Modern Teaching Methods
                  </li>
                  <li className="flex items-center">
                    <Award className="w-4 h-4 text-yellow-400 mr-2" />
                    Regular Assessments
                  </li>
                  <li className="flex items-center">
                    <Award className="w-4 h-4 text-yellow-400 mr-2" />
                    Career Guidance
                  </li>
                  <li className="flex items-center">
                    <Award className="w-4 h-4 text-yellow-400 mr-2" />
                    Extracurricular Activities
                  </li>
                </ul>
              </div>
            </div>

            {/* FIXED: Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleApplyAdmission}
                className="btn-primary flex items-center justify-center hover:scale-105 transition-transform"
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                Apply for Admission
              </button>
              <button 
                onClick={handleDownloadProspectus}
                className="btn-secondary flex items-center justify-center hover:scale-105 transition-transform"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Prospectus
              </button>
            </div>
          </div>
        </div>

        {/* Faculty Section */}
        <div className="mb-16">
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Users className="w-8 h-8 text-yellow-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">Faculty</h2>
              </div>
              {/* FIXED: View All Faculty Button */}
              <button 
                onClick={handleViewAllFaculty}
                className="btn-primary text-sm flex items-center hover:scale-105 transition-transform"
              >
                View All Faculty
                <ExternalLink className="w-4 h-4 ml-2" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Qualified Teachers</h3>
                <p className="text-gray-300 text-sm">Experienced educators with advanced degrees and teaching certifications.</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Subject Specialists</h3>
                <p className="text-gray-300 text-sm">Expert teachers specializing in their respective subject areas.</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Continuous Training</h3>
                <p className="text-gray-300 text-sm">Regular professional development and training programs.</p>
              </div>
            </div>

            {/* FIXED: Join Our Team Section */}
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Join Our Team</h3>
              <div className="text-center mb-6">
                <p className="text-gray-300 mb-4">
                  We are always looking for passionate educators to join our team. 
                  If you are dedicated to shaping young minds and making a difference, we'd love to hear from you.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <button 
                  onClick={handleContactHR}
                  className="btn-primary text-sm flex items-center justify-center hover:scale-105 transition-transform"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Contact HR
                </button>
                <button 
                  onClick={handleCareerOpportunities}
                  className="btn-secondary text-sm flex items-center justify-center hover:scale-105 transition-transform"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Career Opportunities
                </button>
                <button 
                  onClick={handleDownloadApplication}
                  className="btn-primary text-sm flex items-center justify-center hover:scale-105 transition-transform"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Application Form
                </button>
                <button 
                  onClick={handleScheduleVisit}
                  className="btn-secondary text-sm flex items-center justify-center hover:scale-105 transition-transform"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule School Visit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Calendar */}
        <div className="mb-16">
          <div className="card">
            <div className="flex items-center mb-6">
              <Calendar className="w-8 h-8 text-yellow-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">Academic Calendar</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Important Dates</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-300">Academic Year Begins</span>
                    <span className="text-yellow-400 font-semibold">June 1st</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-300">First Term Exams</span>
                    <span className="text-yellow-400 font-semibold">September</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-300">Winter Break</span>
                    <span className="text-yellow-400 font-semibold">December</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-300">Final Exams</span>
                    <span className="text-yellow-400 font-semibold">March</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">School Timings</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-white/5 rounded-lg">
                    <Clock className="w-5 h-5 text-yellow-400 mr-3" />
                    <div>
                      <div className="text-white font-semibold">Morning Session</div>
                      <div className="text-gray-300 text-sm">8:00 AM - 1:00 PM</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-white/5 rounded-lg">
                    <MapPin className="w-5 h-5 text-yellow-400 mr-3" />
                    <div>
                      <div className="text-white font-semibold">Location</div>
                      <div className="text-gray-300 text-sm">Sengani Village, Dharmapuri District</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <div className="card text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Academic Achievements</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">95%</div>
                <div className="text-white font-semibold mb-2">Pass Rate</div>
                <div className="text-gray-300 text-sm">Consistent high performance in board examinations</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
                <div className="text-white font-semibold mb-2">Awards</div>
                <div className="text-gray-300 text-sm">Recognition in academics and extracurricular activities</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">25+</div>
                <div className="text-white font-semibold mb-2">Years</div>
                <div className="text-gray-300 text-sm">Of excellence in education and character building</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicsPage;
