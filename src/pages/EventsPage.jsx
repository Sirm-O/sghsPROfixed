import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Users, Tag, ChevronRight, Download, X, Eye } from 'lucide-react';
import useCMSContent from '../lib/useCMSContent';

const EventsPage = () => {
  const { content: pageContent, loading: pageLoading } = useCMSContent('/content/pages/events.json');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (pageLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner h-12 w-12 mx-auto mb-4"></div>
          <p className="text-white">Loading events...</p>
        </div>
      </div>
    );
  }

  // FIXED: Read More functionality for events
  const handleReadMore = (event) => {
    setSelectedEvent(event);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseEvent = () => {
    setSelectedEvent(null);
    document.body.style.overflow = 'unset';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const isEventPast = (dateString) => {
    return new Date(dateString) < new Date();
  };

  // Sample events data
  const sampleEvents = [
    {
      title: "Winter Break",
      startDate: "2024-12-20T12:00:00",
      endDate: "2025-01-05T12:00:00",
      time: "12:00 AM",
      location: "School Campus",
      description: "Winter break for all students and staff. Classes will resume on January 6th, 2025.",
      fullDescription: "The winter break provides students and staff with a well-deserved rest period. During this time, the school will be closed for regular classes. However, the library will remain open on weekdays from 10 AM to 4 PM for students who wish to study. The school office will operate with limited hours. Emergency contact numbers will be available for urgent matters. Classes will resume on January 6th, 2025, with the regular schedule.",
      category: "Academic",
      contact: "School Office",
      phone: "+91 98765 43210",
      registrationRequired: false,
      image: "/images/uploads/winter-break.jpg"
    },
    {
      title: "Science Exhibition",
      startDate: "2025-01-15T09:00:00",
      endDate: "2025-01-15T17:00:00",
      time: "09:00 AM",
      location: "School Auditorium",
      description: "Annual science exhibition showcasing student projects and innovations.",
      fullDescription: "The annual science exhibition is a platform for students to showcase their scientific projects and innovations. Students from all grades will present their research work, experiments, and creative solutions to real-world problems. The exhibition will feature projects on topics ranging from environmental science to robotics and renewable energy. Judges from local colleges and research institutions will evaluate the projects. Prizes will be awarded in different categories. Parents and community members are invited to witness the scientific talents of our students.",
      category: "Academic",
      contact: "Science Department",
      phone: "+91 98765 43213",
      registrationRequired: true,
      image: "/images/uploads/science-exhibition.jpg"
    },
    {
      title: "Republic Day Celebration",
      startDate: "2025-01-26T08:00:00",
      endDate: "2025-01-26T12:00:00",
      time: "08:00 AM",
      location: "School Grounds",
      description: "Celebrating India's Republic Day with flag hoisting and cultural programs.",
      fullDescription: "Join us in celebrating India's 76th Republic Day with great enthusiasm and patriotic fervor. The celebration will begin with the flag hoisting ceremony followed by the national anthem. Students will present cultural programs including patriotic songs, dances, and speeches highlighting the significance of this important day. The event will also feature a march past by different houses and a display of tableaux representing various states of India. Light refreshments will be served to all attendees.",
      category: "Cultural",
      contact: "Cultural Committee",
      phone: "+91 98765 43210",
      registrationRequired: false,
      image: "/images/uploads/republic-day.jpg"
    },
    {
      title: "Inter-House Sports Competition",
      startDate: "2025-02-10T08:00:00",
      endDate: "2025-02-12T17:00:00",
      time: "08:00 AM",
      location: "School Sports Ground",
      description: "Three-day inter-house sports competition featuring various athletic events.",
      fullDescription: "The annual inter-house sports competition is a three-day extravaganza featuring various athletic events and team sports. Students will compete in track and field events, team sports like volleyball, basketball, and football, as well as individual competitions. Each house will participate with great enthusiasm to win the overall championship trophy. The competition promotes physical fitness, team spirit, and healthy competition among students. Medals and certificates will be awarded to winners and participants. Parents are welcome to cheer for their children.",
      category: "Sports",
      contact: "Sports Department",
      phone: "+91 98765 43214",
      registrationRequired: true,
      image: "/images/uploads/sports-competition.jpg"
    },
    {
      title: "Parent-Teacher Meeting",
      startDate: "2025-02-20T10:00:00",
      endDate: "2025-02-20T16:00:00",
      time: "10:00 AM",
      location: "Individual Classrooms",
      description: "Quarterly parent-teacher meeting to discuss student progress.",
      fullDescription: "The quarterly parent-teacher meeting provides an excellent opportunity for parents to discuss their child's academic progress, behavior, and overall development with teachers. Individual time slots will be allocated to ensure meaningful one-on-one discussions. Teachers will share detailed feedback about each student's performance, strengths, and areas for improvement. Parents can also discuss any concerns or suggestions they may have. This collaborative approach helps in the holistic development of students.",
      category: "Academic",
      contact: "Academic Office",
      phone: "+91 98765 43213",
      registrationRequired: true
    }
  ];

  const events = sampleEvents;
  const categories = ['All', 'Academic', 'Cultural', 'Sports', 'Social', 'Other'];
  
  const filteredEvents = selectedCategory === 'All' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className="section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            {pageContent?.title || "School Events"}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {pageContent?.description || "Stay informed about upcoming school events, activities, and important dates."}
          </p>
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

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredEvents.map((event, index) => (
            <div key={index} className="card hover-scale">
              {event.image && (
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}

              <div className="flex items-center justify-between mb-3">
                <span className={`badge ${
                  event.category === 'Academic' ? 'badge-primary' :
                  event.category === 'Cultural' ? 'badge-secondary' :
                  event.category === 'Sports' ? 'badge-success' :
                  event.category === 'Social' ? 'badge-info' :
                  'badge-secondary'
                }`}>
                  <Tag className="w-3 h-3 mr-1 inline" />
                  {event.category}
                </span>
                <span className={`text-xs px-2 py-1 rounded ${
                  isEventPast(event.endDate) 
                    ? 'bg-gray-500/20 text-gray-400' 
                    : 'bg-green-500/20 text-green-400'
                }`}>
                  {isEventPast(event.endDate) ? 'Past Event' : 'Upcoming'}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 hover:text-yellow-400 transition-colors">
                {event.title}
              </h3>

              <div className="space-y-2 mb-4 text-sm text-gray-300">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-yellow-400" />
                  {event.startDate === event.endDate ? 
                    formatDate(event.startDate) : 
                    `${formatDate(event.startDate)} - ${formatDate(event.endDate)}`
                  }
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-yellow-400" />
                  {formatTime(event.startDate)}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-yellow-400" />
                  {event.location}
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {event.description}
              </p>

              <div className="flex items-center justify-between">
                {/* FIXED: Read More Button */}
                <button 
                  onClick={() => handleReadMore(event)}
                  className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors text-sm"
                >
                  <Eye className="w-4 h-4 mr-1" />
                  Read More
                </button>

                {event.registrationRequired && (
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                    Registration Required
                  </span>
                )}
              </div>

              <div className="mt-3 pt-3 border-t border-white/10 text-xs text-gray-400">
                Contact: {event.contact}<br />
                {event.phone}
              </div>
            </div>
          ))}
        </div>

        {/* No Events Message */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <div className="card max-w-md mx-auto">
              <h3 className="text-xl font-bold text-white mb-4">No Events Found</h3>
              <p className="text-gray-300 mb-6">
                No events found in the "{selectedCategory}" category.
              </p>
              <button 
                onClick={() => setSelectedCategory('All')}
                className="btn-primary"
              >
                View All Events
              </button>
            </div>
          </div>
        )}

        {/* School Calendar Section */}
        <div className="card text-center">
          <h2 className="text-2xl font-bold text-white mb-4">School Calendar</h2>
          <p className="text-gray-300 mb-6">
            For a complete view of all school events and important dates, download our academic calendar.
          </p>
          <button className="btn-primary inline-flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Download Calendar
          </button>
        </div>

        {/* Instructions */}
        <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <h4 className="text-blue-400 font-semibold mb-2">📅 How to Add Events</h4>
          <p className="text-gray-300 text-sm">
            To add new events, create JSON files in the <code className="bg-black/30 px-1 rounded">public/content/events/</code> folder 
            or use the CMS admin interface at <code className="bg-black/30 px-1 rounded">/admin/</code>
          </p>
        </div>
      </div>

      {/* FIXED: Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-purple-900/90 to-blue-900/90 backdrop-blur-md border border-white/20 rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Close Button */}
              <div className="flex justify-between items-start mb-4">
                <span className={`badge ${
                  selectedEvent.category === 'Academic' ? 'badge-primary' :
                  selectedEvent.category === 'Cultural' ? 'badge-secondary' :
                  selectedEvent.category === 'Sports' ? 'badge-success' :
                  selectedEvent.category === 'Social' ? 'badge-info' :
                  'badge-secondary'
                }`}>
                  {selectedEvent.category}
                </span>
                <button 
                  onClick={handleCloseEvent}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Event Image */}
              {selectedEvent.image && (
                <div className="mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={selectedEvent.image} 
                    alt={selectedEvent.title}
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}

              {/* Event Details */}
              <h1 className="text-3xl font-bold text-white mb-4">
                {selectedEvent.title}
              </h1>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="w-5 h-5 mr-3 text-yellow-400" />
                    <div>
                      <div className="font-semibold">Date</div>
                      <div className="text-sm">
                        {selectedEvent.startDate === selectedEvent.endDate ? 
                          formatDate(selectedEvent.startDate) : 
                          `${formatDate(selectedEvent.startDate)} - ${formatDate(selectedEvent.endDate)}`
                        }
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-5 h-5 mr-3 text-yellow-400" />
                    <div>
                      <div className="font-semibold">Time</div>
                      <div className="text-sm">{formatTime(selectedEvent.startDate)}</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-5 h-5 mr-3 text-yellow-400" />
                    <div>
                      <div className="font-semibold">Location</div>
                      <div className="text-sm">{selectedEvent.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="w-5 h-5 mr-3 text-yellow-400" />
                    <div>
                      <div className="font-semibold">Contact</div>
                      <div className="text-sm">{selectedEvent.contact}</div>
                      <div className="text-sm">{selectedEvent.phone}</div>
                    </div>
                  </div>
                </div>
              </div>

              {selectedEvent.registrationRequired && (
                <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center text-blue-400 mb-2">
                    <Users className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Registration Required</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Please contact the organizer to register for this event.
                  </p>
                </div>
              )}

              <div className="text-gray-300 leading-relaxed whitespace-pre-line mb-6">
                {selectedEvent.fullDescription || selectedEvent.description}
              </div>

              {/* Close Button at Bottom */}
              <div className="text-center">
                <button 
                  onClick={handleCloseEvent}
                  className="btn-primary"
                >
                  Close Event Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;
