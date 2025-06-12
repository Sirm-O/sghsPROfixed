import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import useCMSContent from '../lib/useCMSContent';

const Footer = () => {
  const { content: contactData } = useCMSContent('/content/pages/contact.json');

  // Default contact info if CMS data isn't available
  const defaultContact = {
    contact_info: {
      phone: "+91 98765 43210",
      email: "info@senganigirlsschool.edu",
      address: "Sengani Village, Dharmapuri District, Tamil Nadu 636807"
    }
  };

  const contactInfo = contactData?.contact_info || defaultContact.contact_info;

  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">Sengani Girls School</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Empowering young women through quality education and holistic development since 1985.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-yellow-400 text-sm transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="text-gray-300 hover:text-yellow-400 text-sm transition-colors">Academics</Link></li>
              <li><Link to="/admissions" className="text-gray-300 hover:text-yellow-400 text-sm transition-colors">Admissions</Link></li>
              <li><Link to="/student-life" className="text-gray-300 hover:text-yellow-400 text-sm transition-colors">Student Life</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-yellow-400 text-sm transition-colors">Gallery</Link></li>
              <li><Link to="/downloads" className="text-gray-300 hover:text-yellow-400 text-sm transition-colors">Downloads</Link></li>
            </ul>
          </div>

          {/* Contact Info - Now synced with contact page */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2 text-yellow-400" />
                <span className="text-sm">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2 text-yellow-400" />
                <span className="text-sm">{contactInfo.email}</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-2 mt-1 text-yellow-400" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                <Instagram className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Sengani Girls School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

