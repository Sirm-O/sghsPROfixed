import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react';
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

  // Default content
  const defaultContent = {
    title: "Contact Us",
    description: "Get in touch with us for admissions, inquiries, or any other information.",
    contact_info: {
      phone: "+254 723 324518",
      email: "senganigirlsschool@gmail.com",
      address: "Sengani Village, Matungulu Subcounty, Machakos, Tala",
      office_hours: "Monday - Friday: 8:00 AM - 5:00 PM"
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
                    <p className="text-gray-300">{content.contact_info.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300">{content.contact_info.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <MapPin className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-gray-300">{content.contact_info.address}</p>
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
                        {dept.phone}
                      </p>
                      <p className="flex items-center">
                        <Mail className="w-3 h-3 mr-2" />
                        {dept.email}
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

        {/* Map Section */}
        <div className="mt-16">
          <div className="card">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Find Us</h2>
            <div className="bg-gray-300 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-600">Interactive Map Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

