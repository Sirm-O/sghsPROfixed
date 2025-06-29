import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Download, Calendar, Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle, FileText, Users, GraduationCap } from 'lucide-react';
import useCMSContent from '../lib/useCMSContent';

const AdmissionsPage = () => {
  const { content: pageContent, loading } = useCMSContent('/content/pages/admissions.json');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // FIXED: Button handlers for all functionality
  const handleDownloadAdmissionForm = () => {
    // Try to download the admission form, fallback to downloads page
    const admissionFormUrl = '/images/uploads/admission-form.pdf';
    
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = admissionFormUrl;
    link.download = 'Sengani-Girls-School-Admission-Form.pdf';
    link.target = '_blank';
    
    // Try to download, if file doesn't exist, redirect to downloads page
    link.onerror = () => {
      window.location.href = '/downloads';
    };
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Fallback: if download doesn't work, redirect to downloads page
    setTimeout(() => {
      if (!document.hidden) {
        window.location.href = '/downloads';
      }
    }, 1000);
  };

  const handleScheduleVisit = () => {
    window.location.href = '/contact';
  };

  const handleContactAdmissions = () => {
    window.location.href = '/contact';
  };

  const handleDownloadProspectus = () => {
    window.location.href = '/downloads';
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner h-12 w-12 mx-auto mb-4"></div>
          <p className="text-white">Loading admissions information...</p>
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
            {pageContent?.title || "Admissions"}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {pageContent?.description || "Join our community of learners and begin your journey towards academic excellence and personal growth."}
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {/* FIXED: Download Admission Form Button */}
          <button 
            onClick={handleDownloadAdmissionForm}
            className="btn-primary flex items-center justify-center hover:scale-105 transition-transform"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Admission Form
          </button>
          
          <button 
            onClick={handleDownloadProspectus}
            className="btn-secondary flex items-center justify-center hover:scale-105 transition-transform"
          >
            <FileText className="w-4 h-4 mr-2" />
            Download Prospectus
          </button>
          
          <button 
            onClick={handleScheduleVisit}
            className="btn-primary flex items-center justify-center hover:scale-105 transition-transform"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Visit
          </button>
          
          <button 
            onClick={handleContactAdmissions}
            className="btn-secondary flex items-center justify-center hover:scale-105 transition-transform"
          >
            <Phone className="w-4 h-4 mr-2" />
            Contact Admissions
          </button>
        </div>

        {/* Admission Process */}
        <div className="mb-16">
          <div className="card">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Admission Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">1. Application</h3>
                <p className="text-gray-300 text-sm">Download and complete the admission form with all required details.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">2. Interview</h3>
                <p className="text-gray-300 text-sm">Attend an interview session with the student and parents.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">3. Assessment</h3>
                <p className="text-gray-300 text-sm">Complete the academic assessment and entrance evaluation.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">4. Enrollment</h3>
                <p className="text-gray-300 text-sm">Complete the enrollment process and begin your journey with us.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Admission Requirements */}
        <div className="mb-16">
          <div className="card">
            <h2 className="text-3xl font-bold text-white mb-8">Admission Requirements</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Required Documents</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    Completed admission form
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    Birth certificate copy
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    Previous academic records
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    Transfer certificate (if applicable)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    Passport size photographs (4 copies)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    Address proof
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    Parent/Guardian ID proof
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Eligibility Criteria</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">Primary Classes (1-5)</h4>
                    <p className="text-gray-300 text-sm">Age appropriate for the respective class</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">Secondary Classes (6-10)</h4>
                    <p className="text-gray-300 text-sm">Previous class completion certificate required</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">Higher Secondary (11-12)</h4>
                    <p className="text-gray-300 text-sm">Class 10 pass certificate with minimum 60% marks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Dates */}
        <div className="mb-16">
          <div className="card">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Important Dates</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <Calendar className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Application Opens</h3>
                <p className="text-gray-300">January 15, 2025</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Application Deadline</h3>
                <p className="text-gray-300">March 31, 2025</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <Users className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Interviews</h3>
                <p className="text-gray-300">April 1-15, 2025</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <CheckCircle className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Results Announced</h3>
                <p className="text-gray-300">April 30, 2025</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <GraduationCap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Enrollment</h3>
                <p className="text-gray-300">May 1-15, 2025</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <Calendar className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Classes Begin</h3>
                <p className="text-gray-300">June 1, 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fee Structure */}
        <div className="mb-16">
          <div className="card">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Fee Structure</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-white font-semibold py-3 px-4">Class</th>
                    <th className="text-white font-semibold py-3 px-4">Tuition Fee</th>
                    <th className="text-white font-semibold py-3 px-4">Development Fee</th>
                    <th className="text-white font-semibold py-3 px-4">Total Annual Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="text-gray-300 py-3 px-4">Classes 1-5</td>
                    <td className="text-gray-300 py-3 px-4">₹15,000</td>
                    <td className="text-gray-300 py-3 px-4">₹5,000</td>
                    <td className="text-yellow-400 font-semibold py-3 px-4">₹20,000</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="text-gray-300 py-3 px-4">Classes 6-10</td>
                    <td className="text-gray-300 py-3 px-4">₹20,000</td>
                    <td className="text-gray-300 py-3 px-4">₹7,000</td>
                    <td className="text-yellow-400 font-semibold py-3 px-4">₹27,000</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="text-gray-300 py-3 px-4">Classes 11-12</td>
                    <td className="text-gray-300 py-3 px-4">₹25,000</td>
                    <td className="text-gray-300 py-3 px-4">₹8,000</td>
                    <td className="text-yellow-400 font-semibold py-3 px-4">₹33,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-blue-400 text-sm">
                <AlertCircle className="w-4 h-4 inline mr-2" />
                Additional charges may apply for transportation, meals, and extracurricular activities.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-16">
          <div className="card">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Admissions Office</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Contact Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-yellow-400 mr-3" />
                    <div>
                      <div className="text-white font-semibold">Phone</div>
                      <div className="text-gray-300">+91 98765 43210</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-yellow-400 mr-3" />
                    <div>
                      <div className="text-white font-semibold">Email</div>
                      <div className="text-gray-300">admissions@senganigirlsschool.edu</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-yellow-400 mr-3" />
                    <div>
                      <div className="text-white font-semibold">Address</div>
                      <div className="text-gray-300">Sengani Village, Dharmapuri District, Tamil Nadu 636807</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-yellow-400 mr-3" />
                    <div>
                      <div className="text-white font-semibold">Office Hours</div>
                      <div className="text-gray-300">Monday - Friday: 9:00 AM - 4:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Visit Our Campus</h3>
                <p className="text-gray-300 mb-6">
                  We encourage prospective students and parents to visit our campus to experience 
                  our learning environment firsthand. Schedule a visit to tour our facilities, 
                  meet our faculty, and learn more about our programs.
                </p>
                
                <div className="space-y-4">
                  <button 
                    onClick={handleScheduleVisit}
                    className="btn-primary w-full hover:scale-105 transition-transform"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Campus Visit
                  </button>
                  
                  <button 
                    onClick={handleDownloadAdmissionForm}
                    className="btn-secondary w-full hover:scale-105 transition-transform"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Admission Form
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="card">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="p-4 bg-white/5 rounded-lg">
              <h3 className="text-white font-semibold mb-2">What is the admission age criteria?</h3>
              <p className="text-gray-300 text-sm">Students should be age-appropriate for their respective classes as per CBSE guidelines.</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
              <h3 className="text-white font-semibold mb-2">Is there an entrance exam?</h3>
              <p className="text-gray-300 text-sm">Yes, we conduct an academic assessment for classes 6 and above to evaluate the student's readiness.</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
              <h3 className="text-white font-semibold mb-2">What is the student-teacher ratio?</h3>
              <p className="text-gray-300 text-sm">We maintain a low student-teacher ratio of 20:1 to ensure personalized attention for each student.</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
              <h3 className="text-white font-semibold mb-2">Are scholarships available?</h3>
              <p className="text-gray-300 text-sm">Yes, we offer merit-based scholarships and financial assistance for deserving students.</p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <h4 className="text-blue-400 font-semibold mb-2">📝 How to Update Admissions Information</h4>
          <p className="text-gray-300 text-sm">
            To update admissions information, edit the <code className="bg-black/30 px-1 rounded">public/content/pages/admissions.json</code> file 
            or use the CMS admin interface at <code className="bg-black/30 px-1 rounded">/admin/</code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsPage;
