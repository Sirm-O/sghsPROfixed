import React from 'react';
import { BookOpen, Users, Award, Target, Clock, MapPin } from 'lucide-react';
import useCMSContent from '../lib/useCMSContent';

const AcademicsPage = () => {
  const { content: pageContent, loading } = useCMSContent('/content/pages/academics.json');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner h-12 w-12 mx-auto mb-4"></div>
          <p className="text-white">Loading academics...</p>
        </div>
      </div>
    );
  }

  // Default content if CMS data isn't available
  const defaultContent = {
    title: "Academics",
    description: "Comprehensive education programs designed to nurture academic excellence and critical thinking.",
    curriculum: {
      title: "Our Curriculum",
      description: "Our comprehensive curriculum is designed to provide students with a strong foundation in core subjects while encouraging critical thinking, creativity, and practical application of knowledge.",
      subjects: [
        {
          name: "Mathematics",
          description: "Advanced mathematical concepts and problem-solving skills",
          grades: "6-12"
        },
        {
          name: "Science",
          description: "Physics, Chemistry, and Biology with hands-on laboratory experience",
          grades: "6-12"
        },
        {
          name: "Languages",
          description: "Tamil, English, and Hindi language and literature",
          grades: "6-12"
        },
        {
          name: "Social Studies",
          description: "History, Geography, Civics, and Economics",
          grades: "6-12"
        },
        {
          name: "Computer Science",
          description: "Programming, digital literacy, and technology skills",
          grades: "8-12"
        },
        {
          name: "Arts & Crafts",
          description: "Creative expression through various art forms",
          grades: "6-12"
        }
      ]
    },
    programs: [
      {
        title: "CBSE Curriculum",
        description: "Following the Central Board of Secondary Education curriculum with modern teaching methodologies."
      },
      {
        title: "Science Laboratory",
        description: "Well-equipped laboratories for Physics, Chemistry, and Biology practical sessions."
      },
      {
        title: "Computer Lab",
        description: "Modern computer laboratory with latest software and internet connectivity."
      },
      {
        title: "Library",
        description: "Extensive collection of books, journals, and digital resources for research and reading."
      }
    ],
    achievements: [
      {
        title: "Board Results",
        description: "Consistently achieving 95%+ pass rates in Class 10 and 12 board examinations"
      },
      {
        title: "Academic Awards",
        description: "Multiple students receiving state-level recognition for academic excellence"
      },
      {
        title: "Competitive Exams",
        description: "Strong performance in JEE, NEET, and other competitive examinations"
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

        {/* Curriculum Overview */}
        <div className="mb-16">
          <div className="card max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mr-4">
                <BookOpen className="w-6 h-6 text-yellow-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">{content.curriculum.title}</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {content.curriculum.description}
            </p>
            
            {/* Subjects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.curriculum.subjects.map((subject, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                  <h3 className="text-lg font-bold text-white mb-2">{subject.name}</h3>
                  <p className="text-gray-300 text-sm mb-2">{subject.description}</p>
                  <span className="text-yellow-400 text-xs">Grades {subject.grades}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Academic Programs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Academic Programs & Facilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {content.programs.map((program, index) => (
              <div key={index} className="card hover-scale">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{program.title}</h3>
                </div>
                <p className="text-gray-300">{program.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Academic Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.achievements.map((achievement, index) => (
              <div key={index} className="card text-center hover-scale hover-glow">
                <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="card max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            Ready to Excel Academically?
          </h2>
          <p className="text-gray-300 mb-6">
            Join our academic community and discover your potential for excellence in education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Apply for Admission
            </button>
            <button className="btn-secondary">
              Download Prospectus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicsPage;

