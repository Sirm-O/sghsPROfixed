import React from 'react';
import { ChevronRight, Star, BookOpen, Users, Award, ArrowRight } from 'lucide-react';
import useCMSContent from '../lib/useCMSContent';

const HomePage = () => {
  const { content: pageContent, loading } = useCMSContent('/content/pages/home.json');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner h-12 w-12 mx-auto mb-4"></div>
          <p className="text-white">Loading...</p>
        </div>
      </div>
    );
  }

  // Default content if CMS data isn't available
  const defaultContent = {
    hero: {
      title: "Welcome to SENGANI GIRLS SCHOOL",
      subtitle: "Empowering young women through quality education and holistic development",
      cta: "Learn More"
    },
    introduction: {
      title: "Nurturing Excellence",
      description: "Sengani Girls School is dedicated to providing a supportive and enriching environment where young women can develop their academic abilities, character, and leadership skills."
    },
    features: [
      {
        icon: "Star",
        title: "Academic Excellence",
        description: "Comprehensive curriculum designed to foster critical thinking and academic achievement."
      },
      {
        icon: "BookOpen",
        title: "Holistic Education",
        description: "Balanced approach combining academics with character development and life skills."
      },
      {
        icon: "Users",
        title: "Supportive Community",
        description: "Nurturing environment where every student feels valued and supported."
      },
      {
        icon: "Award",
        title: "Leadership Development",
        description: "Opportunities to develop leadership skills and confidence for future success."
      }
    ],
    testimonials: [
      {
        quote: "Sengani Girls School provided me with the foundation I needed to succeed in life. The teachers are dedicated and the environment is truly nurturing.",
        author: "Fyza Wangari",
        role: "Alumni, Class of 2024"
      },
      {
        quote: "My daughter has grown tremendously since joining this school. The focus on both academics and character development is exceptional.",
        author: "Mr. Nelson Mutuku",
        role: "Parent"
      }
    ]
  };

  const content = pageContent || defaultContent;

  const getIcon = (iconName) => {
    const icons = {
      Star,
      BookOpen,
      Users,
      Award
    };
    return icons[iconName] || Star;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            {content.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            {content.hero.subtitle}
          </p>
          <button className="btn-primary text-lg px-8 py-3">
            {content.hero.cta}
            <ChevronRight className="w-5 h-5 ml-2 inline" />
          </button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="content-section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {content.introduction.title}
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              {content.introduction.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="content-section">
        <div className="container mx-auto">
          <div className="grid-responsive">
            {content.features.map((feature, index) => {
              const IconComponent = getIcon(feature.icon);
              return (
                <div key={index} className="card hover-scale hover-glow text-center">
                  <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="content-section">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What Our Community Says
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {content.testimonials.map((testimonial, index) => (
              <div key={index} className="card hover-scale">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 italic text-lg">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="content-section">
        <div className="container mx-auto">
          <div className="card max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Discover how Sengani Girls School can help your daughter reach her full potential through quality education and holistic development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-3">
                Apply for Admission
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="btn-secondary text-lg px-8 py-3">
                Schedule a Visit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

