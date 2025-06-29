import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare, ExternalLink } from 'lucide-react';
import useCMSContent from '../lib/useCMSContent';

const ContactPage = () => {
  const { content: pageContent, loading } = useCMSContent('/content/pages/contact.json');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner h-12 w-12 mx-auto mb-4"></div>
          <p className="text-white">Loading contact information...</p>
        </div>
      </div>
    );
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  // UPDATED: Correct location details for Sengani Girls School
  const defaultContent = {
    title: "Contact Us",
    description: "Get in touch with us for admissions, inquiries, or any other information.",
    contact_info: {
      phone: "+254 723 324518",
      email: "senganigirlsschool@gmail.com",
      address: "Sengani Village, Matungulu Subcounty, Machakos County, Kenya",
      office_hours: "Monday - Friday: 8:00 AM - 5:00 PM",
      // ADDED: Coordinates for Google Maps
      coordinates: {
        lat: -1.3833,  // Approximate latitude for Machakos area
        lng: 37.2667   // Approximate longitude for Machakos area
      }
    },
    departments: [
      {
        name: "Admissions Office",
        phone: "+254 723 324518",
        email: "senganigirlsschool@gmail.com",
        hours: "9:00 AM - 3:00 PM"
      },
      {
        name: "Principal's Office",
        phone: "+254 723 324518",
        email: "senganigirlsschool@gmail.com",
        hours: "10:00 AM - 2:00 PM"
      },
      {
        name: "Academic Office",
        phone: "+254 723 324518",
        email: "senganigirlsschool@gmail.com",
        hours: "9:00 AM - 4:00 PM"
      }
    ]
  };

  const content = pageContent || defaultContent;

  // ADDED: Google Maps integration functions
  const openInGoogleMaps = () => {
    const address = encodeURIComponent(content.contact_info.address);
    const url = `https://www.google.com/maps/search/?api=1&query=${address}`;
    window.open(url, '_blank' );
  };

  const getDirections = () => {
    const address = encodeURIComponent(content.contact_info.address);
    const url = `https://www.google.com/maps/dir/?api=1&destination=${address}`;
    window.open(url, '_blank' );
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>
            
            {/* Main Contact Info */}
            <div className="card mb-8">
              <h3 className="text-lg font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-300">
                      <a href={`tel:${content.contact_info.phone}`} className="hover:text-yellow-400 transition-colors">
                        {content.contact_info.phone}
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300">
                      <a href={`mailto:${content.contact_info.email}`} className="hover:text-yellow-400 transition-colors">
                        {content.contact_info.email}
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <MapPin className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">Address</p>
                    <p className="text-gray-300 mb-2">{content.contact_info.address}</p>
                    {/* ADDED: Map action buttons */}
                    <div className="flex gap-2">
                      <button 
                        onClick={openInGoogleMaps}
                        className="text-xs bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full hover:bg-yellow-400/30 transition-colors flex items-center"
                      >
                        <MapPin className="w-3 h-3 mr-1" />
                        View on Map
                      </button>
                      <button 
                        onClick={getDirections}
                        className="text-xs bg-blue-400/20 text-blue-400 px-3 py-1 rounded-full hover:bg-blue-400/30 transition-colors flex items-center"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Get Directions
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Office Hours</p>
                    <p className="text-gray-300">{content.contact_info.office_hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Department Contacts */}
            <div className="card">
              <h3 className="text-lg font-bold text-white mb-6">Department Contacts</h3>
              <div className="space-y-6">
                {content.departments.map((dept, index) => (
                  <div key={index} className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="text-white font-semibold mb-2">{dept.name}</h4>
                    <div className="space-y-1 text-sm text-gray-300">
                      <p className="flex items-center">
                        <Phone className="w-3 h-3 mr-2" />
                        <a href={`tel:${dept.phone}`} className="hover:text-yellow-400 transition-colors">
                          {dept.phone}
                        </a>
                      </p>
                      <p className="flex items-center">
                        <Mail className="w-3 h-3 mr-2" />
                        <a href={`mailto:${dept.email}`} className="hover:text-yellow-400 transition-colors">
                          {dept.email}
                        </a>
                      </p>
                      <p className="flex items-center">
                        <Clock className="w-3 h-3 mr-2" />
                        {dept.hours}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">Send us a Message</h2>
            <div className="card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="form-select"
                    >
                      <option value="">Select a subject</option>
                      <option value="admission">Admission Inquiry</option>
                      <option value="academic">Academic Information</option>
                      <option value="general">General Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="form-input resize-none"
                    placeholder="Enter your message here..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* UPDATED: Interactive Google Maps Section */}
        <div className="mt-16">
          <div className="card">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Find Us on the Map</h2>
            
            {/* Map Container */}
            <div className="relative">
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                {/* Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127642.5!2d37.2667!3d-1.3833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f5b8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sMachakos%2C%20Kenya!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sengani Girls School Location"
                  className="w-full h-96"
                ></iframe>
              </div>
              
              {/* Map Overlay with Actions */}
              <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4">
                <div className="space-y-2">
                  <button 
                    onClick={openInGoogleMaps}
                    className="btn-primary text-sm w-full flex items-center justify-center"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Open in Google Maps
                  </button>
                  <button 
                    onClick={getDirections}
                    className="btn-secondary text-sm w-full flex items-center justify-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Get Directions
                  </button>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="mt-6 grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-white/5 rounded-lg">
                <MapPin className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-gray-300 text-sm">{content.contact_info.address}</p>
              </div>
              
              <div className="p-4 bg-white/5 rounded-lg">
                <Phone className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-gray-300 text-sm">
                  <a href={`tel:${content.contact_info.phone}`} className="hover:text-yellow-400 transition-colors">
                    {content.contact_info.phone}
                  </a>
                </p>
              </div>
              
              <div className="p-4 bg-white/5 rounded-lg">
                <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Office Hours</h3>
                <p className="text-gray-300 text-sm">{content.contact_info.office_hours}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Transportation Info */}
        <div className="mt-8">
          <div className="card">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">How to Reach Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">By Public Transport</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Take a matatu from Machakos town to Tala</li>
                  <li>• From Tala, take a local matatu to Sengani Village</li>
                  <li>• The school is located in the center of Sengani Village</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">By Private Vehicle</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• From Nairobi: Take Mombasa Road to Machakos</li>
                  <li>• From Machakos: Head towards Tala via Matungulu</li>
                  <li>• Follow signs to Sengani Village</li>
                  <li>• Parking available on school premises</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <h4 className="text-blue-400 font-semibold mb-2">📞 How to Update Contact Information</h4>
          <p className="text-gray-300 text-sm">
            To update contact information, edit the <code className="bg-black/30 px-1 rounded">public/content/pages/contact.json</code> file 
            or use the CMS admin interface at <code className="bg-black/30 px-1 rounded">/admin/</code>
          </p>
        </div>
      </div>
    </div>
   );
};

export default ContactPage;
