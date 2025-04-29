
import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Add your friends',
    description: 'Easily connect with friends and family in your pingup network',
    icon: '👥'
  },
  {
    number: '02',
    title: 'Set ping schedules',
    description: 'Choose how often you want to be reminded to check in',
    icon: '🗓️'
  },
  {
    number: '03',
    title: 'Send meaningful pings',
    description: 'Get prompts to help you start thoughtful conversations',
    icon: '💬'
  },
  {
    number: '04',
    title: 'Stay connected',
    description: 'Build stronger relationships through regular check-ins',
    icon: '❤️'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-white py-20">
      <div className="section-container">
        <h2 className="section-title">How Pingup Works</h2>
        <p className="section-subtitle">
          Pingup makes it easy to maintain meaningful connections with the people who matter most to you
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-5xl">{step.icon}</span>
                <span className="text-pingup-purple font-bold">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:flex justify-end mt-4">
                  <ArrowRight className="text-pingup-purple" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
