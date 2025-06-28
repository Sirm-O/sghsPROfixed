import React, { useState, useEffect } from 'react';
import { Users, Mail, Phone, Award, BookOpen, ChevronRight, X } from 'lucide-react';
import useCMSContent from '../lib/useCMSContent';

const FacultyPage = () => {
  const { content: pageContent, loading } = useCMSContent('/content/pages/faculty.json');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner h-12 w-12 mx-auto mb-4"></div>
          <p className="text-white">Loading faculty information...</p>
        </div>
      </div>
    );
  }

  // FIXED: Sample faculty data with proper structure
  const facultyData = [
    {
      name: "Dr. Margaret Mwendwa",
      position: "Principal",
      department: "Administration",
      photo: "/images/uploads/1.jpg",
      email: "principal@senganigirlsschool.edu",
      phone: "+254 723 324518",
      qualifications: "Ph.D. in Education, M.Ed., B.Ed.",
      experience: "25 years",
      specialization: "Educational Leadership, Curriculum Development",
      bio: "Dr. Margaret has been leading Sengani Girls School with dedication and vision for over a decade. Her commitment to educational excellence and student welfare has transformed the institution into a center of academic and character development."
    },
    {
      name: "Mr. Sammy Anthony",
      position: "Head of Department",
      department: "Mathematics",
      photo: "/images/uploads/1.jpg",
      email: "sammya.edu",
      phone: "+254 71234587",
      qualifications: "M.Sc. Mathematics, B.Ed.",
      experience: "15 years",
      specialization: "Advanced Mathematics, Problem Solving",
      bio: "Mr. Sammy brings innovative teaching methods to mathematics education, making complex concepts accessible and engaging for students."
    },
    {
      name: "Dr. Githinji Ndonye",
      position: "Head of Department",
      department: "Science",
      photo: "/images/uploads/1.jpg",
      email: "githinji@senganigirlsschool.edu",
      phone: "+254 7524585652",
      qualifications: "Ph.D. in Physics, M.Sc. Chemistry, B.Ed.",
      experience: "18 years",
      specialization: "Chemistry, Scientific Research Methods",
      bio: "Dr. Githinji encourages scientific inquiry and hands-on learning, inspiring students to explore the wonders of science."
    },
    {
      name: "Ms. Faith",
      position: "Head of Department",
      department: "English",
      photo: "/images/uploads/1.jpg",
      email: "faith@senganigirlsschool.edu",
      phone: "+254 725625689",
      qualifications: "M.A. English Literature, B.Ed.",
      experience: "12 years",
      specialization: "English Literature, Creative Writing",
      bio: "Ms. Faith Reddy fosters a love for language and literature, helping students develop strong communication skills."
    },
    {
      name: "Mr. Onsarigo Bernard",
      position: "Head of Department",
      department: "Applied Sciences",
      photo: "/images/uploads/1.jpg",
      email: "onsa@senganigirlsschool.edu",
      phone: "+254 21745256",
      qualifications: "M.A. Tamil Literature, B.Ed.",
      experience: "20 years",
      specialization: "Mathematics, Business Studies",
      bio: "Mr. Onsarigo preserves and promotes Tamil culture and language, connecting students with their rich heritage."
    },
    {
      name: "Mr. Mwenda Duncan",
      position: "Head of Department",
      department: "Humanities",
      photo: "/images/uploads/1.jpg",
      email: "mwenda@senganigirlsschool.edu",
      phone: "+254 725326485",
      qualifications: "M.A. History, B.Ed.",
      experience: "14 years",
      specialization: "History, Civics, Geography",
      bio: "Mr. Mwenda brings history to life and helps students understand their role as responsible citizens."
    },
    {
      name: "Mr. Nguku Alex",
      position: "Head of Department",
      department: "Arts & Sports",
      photo: "/images/uploads/1.jpg",
      email: "alex@senganigirlsschool.edu",
      phone: "+254 723265842",
      qualifications: "M.F.A., B.F.A.",
      experience: "10 years",
      specialization: "Englis, Handicrafts",
      bio: "Mr. Nguku nurtures creativity and artistic expression, helping students discover their artistic talents."
    },
    {
      name: "Mrs. Margaret Maragia",
      position: "Deputy Principal-Academics",
      department: "Humanities",
      photo: "/images/uploads/1.jpg",
      email: "deepa.@senganigirlsschool.edu",
      phone: "+254 7425625158",
      qualifications: "M.Sc. Geography, B.Ed.",
      experience: "8 years",
      specialization: "Mathematics, Geometry",
      bio: "Mrs. Maragia makes mathematics enjoyable and helps students build strong foundational skills."
    },
    {
      name: "Dr. Sam Ochieng",
      position: "HOD-Examinations",
      department: "Science",
      photo: "/images/uploads/1.jpg",
      email: "so@senganigirlsschool.edu",
      phone: "+254 7525622",
      qualifications: "Ph.D. in Chemistry, M.Sc. Chemistry",
      experience: "16 years",
      specialization: "Physics, Mathematics",
      bio: "Dr. Sam conducts engaging chemistry experiments that spark curiosity and scientific thinking."
    }
  ];

  // Use faculty data from CMS or fallback to sample data
  const faculty = pageContent?.faculty || facultyData;
  const principal = pageContent?.principal || facultyData[0];

  // FIXED: Department filtering
  const departments = ['All', 'Administration', 'Mathematics', 'Science', 'English', 'Humanities', 'Applied Sciences', 'Arts & Sports'];
  
  const filteredFaculty = selectedDepartment === 'All' 
    ? faculty 
    : faculty.filter(member => member.department === selectedDepartment);

  // FIXED: Handle faculty member selection
  const handleFacultyClick = (member) => {
    setSelectedFaculty(member);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseFaculty = () => {
    setSelectedFaculty(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            {pageContent?.title || "Faculty & Staff"}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {pageContent?.description || "Meet our dedicated team of educators and staff members."}
          </p>
        </div>

        {/* Principal's Message */}
        <div className="mb-16">
          <div className="card">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                  <img 
                    src={principal.photo} 
                    alt={principal.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(principal.name )}&size=200&background=6366f1&color=ffffff`;
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{principal.name}</h3>
                <p className="text-yellow-400 mb-2">{principal.position}</p>
                <p className="text-gray-300 text-sm">{principal.qualifications}</p>
              </div>
              
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-white mb-4">Principal's Message</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {principal.bio || "Welcome to Sengani Girls School. Our dedicated faculty and staff are committed to providing quality education and nurturing the potential of every student. We believe in creating an environment where young women can grow academically, socially, and personally."}
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-4 h-4 mr-2 text-yellow-400" />
                    {principal.email}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-4 h-4 mr-2 text-yellow-400" />
                    {principal.phone}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Department Filter - FIXED */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedDepartment === dept
                    ? 'bg-yellow-400 text-purple-900'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Faculty Grid - FIXED */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredFaculty.map((member, index) => (
            <div key={index} className="card hover-scale cursor-pointer" onClick={() => handleFacultyClick(member)}>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name )}&size=128&background=6366f1&color=ffffff`;
                    }}
                  />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{member.name}</h3>
                <p className="text-yellow-400 text-sm mb-1">{member.position}</p>
                <p className="text-gray-300 text-sm mb-3">{member.department}</p>
                
                <div className="space-y-1 text-xs text-gray-400 mb-4">
                  <div className="flex items-center justify-center">
                    <Award className="w-3 h-3 mr-1" />
                    {member.experience} experience
                  </div>
                  <div className="flex items-center justify-center">
                    <BookOpen className="w-3 h-3 mr-1" />
                    {member.specialization}
                  </div>
                </div>

                <button className="text-yellow-400 hover:text-yellow-300 transition-colors text-sm flex items-center justify-center mx-auto">
                  View Profile <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Faculty Message - FIXED */}
        {filteredFaculty.length === 0 && (
          <div className="text-center py-16">
            <div className="card max-w-md mx-auto">
              <h3 className="text-xl font-bold text-white mb-4">No Faculty Found</h3>
              <p className="text-gray-300 mb-6">
                No faculty members found in the "{selectedDepartment}" department.
              </p>
              <button 
                onClick={() => setSelectedDepartment('All')}
                className="btn-primary"
              >
                View All Faculty
              </button>
            </div>
          </div>
        )}

        {/* Departments Overview */}
        <div className="card">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Our Departments</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pageContent?.departments?.map((dept, index) => (
              <div key={index} className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-2">{dept.name}</h3>
                <p className="text-gray-300 text-sm mb-3">{dept.description}</p>
                <p className="text-yellow-400 text-sm">Head: {dept.hod}</p>
              </div>
            )) || (
              // Fallback departments
              <>
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <h3 className="text-lg font-semibold text-white mb-2">Mathematics</h3>
                  <p className="text-gray-300 text-sm mb-3">Developing analytical thinking and problem-solving skills.</p>
                  <p className="text-yellow-400 text-sm">Head: Mr. Rajesh Kumar</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <h3 className="text-lg font-semibold text-white mb-2">Science</h3>
                  <p className="text-gray-300 text-sm mb-3">Fostering scientific inquiry and research.</p>
                  <p className="text-yellow-400 text-sm">Head: Dr. Meera Nair</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <h3 className="text-lg font-semibold text-white mb-2">English</h3>
                  <p className="text-gray-300 text-sm mb-3">Enhancing communication and literary skills.</p>
                  <p className="text-yellow-400 text-sm">Head: Ms. Sunita Reddy</p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <h4 className="text-blue-400 font-semibold mb-2">👥 How to Update Faculty Information</h4>
          <p className="text-gray-300 text-sm">
            To update faculty information, edit the <code className="bg-black/30 px-1 rounded">public/content/pages/faculty.json</code> file 
            or use the CMS admin interface at <code className="bg-black/30 px-1 rounded">/admin/</code>
          </p>
        </div>
      </div>

      {/* FIXED: Faculty Details Modal */}
      {selectedFaculty && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-purple-900/90 to-blue-900/90 backdrop-blur-md border border-white/20 rounded-xl max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Close Button */}
              <div className="flex justify-end mb-4">
                <button 
                  onClick={handleCloseFaculty}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Faculty Details */}
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <img 
                    src={selectedFaculty.photo} 
                    alt={selectedFaculty.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedFaculty.name )}&size=128&background=6366f1&color=ffffff`;
                    }}
                  />
                </div>
                <h1 className="text-2xl font-bold text-white mb-2">{selectedFaculty.name}</h1>
                <p className="text-yellow-400 mb-1">{selectedFaculty.position}</p>
                <p className="text-gray-300">{selectedFaculty.department}</p>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="text-white font-semibold mb-2">Qualifications</h3>
                  <p className="text-gray-300">{selectedFaculty.qualifications}</p>
                </div>
                
                <div>
                  <h3 className="text-white font-semibold mb-2">Experience</h3>
                  <p className="text-gray-300">{selectedFaculty.experience}</p>
                </div>
                
                <div>
                  <h3 className="text-white font-semibold mb-2">Specialization</h3>
                  <p className="text-gray-300">{selectedFaculty.specialization}</p>
                </div>
                
                <div>
                  <h3 className="text-white font-semibold mb-2">About</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedFaculty.bio}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-2 text-yellow-400" />
                  <span className="text-sm">{selectedFaculty.email}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-2 text-yellow-400" />
                  <span className="text-sm">{selectedFaculty.phone}</span>
                </div>
              </div>

              {/* Close Button at Bottom */}
              <div className="text-center">
                <button 
                  onClick={handleCloseFaculty}
                  className="btn-primary"
                >
                  Close Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacultyPage;
