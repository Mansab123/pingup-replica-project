
import React from 'react';

const features = [
  {
    title: 'Investment Portfolio Management',
    description: 'Track, analyze, and optimize your investments across multiple accounts',
    icon: '📊'
  },
  {
    title: 'Retirement Planning',
    description: 'Calculate your retirement needs and create a personalized savings plan',
    icon: '🏖️'
  },
  {
    title: 'Tax Optimization',
    description: 'Minimize your tax burden with intelligent investment strategies',
    icon: '💰'
  },
  {
    title: 'Secure & Encrypted',
    description: 'Bank-level security to keep your financial information safe',
    icon: '🔒'
  },
  {
    title: 'Financial Education',
    description: 'Access resources to improve your financial literacy and decision-making',
    icon: '📚'
  },
  {
    title: 'Personalized Advice',
    description: 'Get tailored recommendations based on your goals and risk profile',
    icon: '⚙️'
  }
];

const Features = () => {
  return (
    <section id="features" className="bg-gray-50 py-20">
      <div className="section-container">
        <h2 className="section-title">Features That Empower You</h2>
        <p className="section-subtitle">
          Designed to help you make informed financial decisions and secure your future
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-pingup-light-purple rounded-full flex items-center justify-center text-2xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
