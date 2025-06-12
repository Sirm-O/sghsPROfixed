import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, ChevronRight, Tag, ExternalLink } from 'lucide-react';
import useCMSContent from '../lib/useCMSContent';

const EventsPage = () => {
  const { content: pageContent, loading: pageLoading } = useCMSContent('/content/pages/events.json');
  const [selectedCategory, setSelectedCategory] = useState('All');

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

  const isUpcoming = (dateString) => {
    return new Date(dateString) > new Date();
  };

  // Sample events data - this will be populated via CMS
  const sampleEvents = [
    {
      title: "Winter Break",
      date: "2024-12-20T00:00:00",
      end_date: "2025-01-05T00:00:00",
      location: "School Campus",
      description: "Winter break for all students and staff. Classes will resume on January 6th, 2025.",
      body: "The school will be closed for winter break. We wish all our students and families a wonderful holiday season. Classes will resume on January 6th, 2025 with the new semester.",
      category: "Academic",
      image: "/images/uploads/winter-break.jpg",
      registration: false,
      contact: "School Office",
      contact_phone: "+91 98765 43210"
    },
    {
      title: "Science Exhibition",
      date: "2025-01-15T09:00:00",
      end_date: "2025-01-15T16:00:00",
      location: "School Auditorium",
      description: "Annual science exhibition showcasing student projects and innovations.",
      body: "Students from all grades will present their science projects. Parents and guests are invited to witness the creativity and scientific thinking of our students. Awards will be given for outstanding projects.",
      category: "Academic",
      image: "/images/uploads/science-exhibition.jpg",
      registration: true,
      registration_link: "/contact",
      contact: "Science Department",
      contact_phone: "+91 98765 43213"
    },
    {
      title: "Republic Day Celebration",
      date: "2025-01-26T08:00:00",
      end_date: "2025-01-26T12:00:00",
      location: "School Grounds",
      description: "Celebrating India's Republic Day with flag hoisting and cultural programs.",
      body: "Join us for the Republic Day celebration featuring flag hoisting, patriotic songs, and cultural performances by our students. The event will highlight the importance of our constitution and democratic values.",
      category: "Cultural",
      image: "/images/uploads/republic-day.jpg",
      registration: false,
      contact: "Cultural Committee",
      contact_phone: "+91 98765 43210"
    },
    {
      title: "Inter-House Sports Competition",
      date: "2025-02-10T08:00:00",
      end_date: "2025-02-12T17:00:00",
      location: "School Sports Ground",
      description: "Three-day inter-house sports competition featuring various athletic events.",
      body: "The annual inter-house sports competition will feature track and field events, team sports, and individual competitions. Students will compete for their respective houses in a spirit of healthy competition.",
      category: "Sports",
      image: "/images/uploads/sports-competition.jpg",
      registration: true,
      registration_link: "/contact",
      contact: "Sports Department",
      contact_phone: "+91 98765 43214"
    },
    {
      title: "Parent-Teacher Meeting",
      date: "2025-02-20T10:00:00",
      end_date: "2025-02-20T16:00:00",
      location: "Individual Classrooms",
      description: "Quarterly parent-teacher meeting to discuss student progress.",
      body: "Parents are invited to meet with teachers to discuss their child's academic progress, behavior, and development. Individual time slots will be allocated for meaningful discussions.",
      category: "Academic",
      registration: true,
      registration_link: "/contact",
      contact: "Academic Office",
      contact_phone: "+91 98765 43213"
    }
  ];

  const events = sampleEvents;
  const categories = ['All', 'Academic', 'Cultural', 'Sports', 'Social', 'Other'];
  
  const filteredEvents = selectedCategory === 'All' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const upcomingEvents = events.filter(event => isUpcoming(event.date));
  const pastEvents = events.filter(event => !isUpcoming(event.date));

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

        {/* Upcoming Events Highlight */}
        {upcomingEvents.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Upcoming Events
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {upcomingEvents.slice(0, 2).map((event, index) => (
                <div key={index} className="card hover-scale border-l-4 border-yellow-400">
                  {event.image && (
                    <div className="mb-4 overflow-hidden rounded-lg">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {formatTime(event.date)}
                    </div>
                    <span className="badge badge-success">
                      Upcoming
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-yellow-400 transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-gray-300 mb-3">
                    <MapPin className="w-4 h-4 mr-2 text-yellow-400" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {event.description}
                  </p>
                  {event.registration && (
                    <div className="flex gap-2 mb-4">
                      <button className="btn-primary text-sm">
                        <Users className="w-4 h-4 mr-1" />
                        Register Now
                      </button>
                    </div>
                  )}
                  <button className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
                    View Details <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <div key={index} className={`card hover-scale ${isUpcoming(event.date) ? 'border-l-4 border-green-400' : 'border-l-4 border-gray-400'}`}>
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
                <span className={`text-xs ${isUpcoming(event.date) ? 'text-green-400' : 'text-gray-400'}`}>
                  {isUpcoming(event.date) ? 'Upcoming' : 'Past Event'}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 hover:text-yellow-400 transition-colors line-clamp-2">
                {event.title}
              </h3>

              <div className="space-y-2 mb-3 text-xs text-gray-400">
                <div className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {formatDate(event.date)}
                  {event.end_date && event.end_date !== event.date && (
                    <span> - {formatDate(event.end_date)}</span>
                  )}
                </div>
                <div className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {formatTime(event.date)}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  {event.location}
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {event.description}
              </p>

              <div className="flex flex-col gap-2">
                {event.registration && isUpcoming(event.date) && (
                  <button className="btn-primary text-sm">
                    <Users className="w-4 h-4 mr-1" />
                    Register
                  </button>
                )}
                
                {event.contact && (
                  <div className="text-xs text-gray-400">
                    Contact: {event.contact}
                    {event.contact_phone && (
                      <span className="block">{event.contact_phone}</span>
                    )}
                  </div>
                )}
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

        {/* Event Calendar Notice */}
        <div className="mt-16">
          <div className="card max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              School Calendar
            </h2>
            <p className="text-gray-300 mb-6">
              For a complete view of all school events and important dates, download our academic calendar.
            </p>
            <button className="btn-primary">
              <Calendar className="w-4 h-4 mr-2" />
              Download Calendar
            </button>
          </div>
        </div>

        {/* Instructions for adding events */}
        <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <h4 className="text-blue-400 font-semibold mb-2">📅 How to Add Events</h4>
          <p className="text-gray-300 text-sm">
            To add new events, create JSON files in the <code className="bg-black/30 px-1 rounded">public/content/events/</code> folder 
            or use the CMS admin interface at <code className="bg-black/30 px-1 rounded">/admin/</code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;

