
import React from 'react';

const features = [
  {
    title: 'Smart Ping Reminders',
    description: 'Get gentle reminders to check in on friends when it matters most',
    icon: '🔔'
  },
  {
    title: 'Thoughtful Prompts',
    description: 'Never run out of meaningful things to say with our conversation starters',
    icon: '💡'
  },
  {
    title: 'Connection Insights',
    description: 'See patterns in your relationships and get suggestions for strengthening bonds',
    icon: '📊'
  },
  {
    title: 'Private & Secure',
    description: 'Your relationships and conversations are always private and secure',
    icon: '🔒'
  },
  {
    title: 'Cross-Platform',
    description: 'Ping friends through their preferred messaging apps or SMS',
    icon: '📱'
  },
  {
    title: 'Customizable Experience',
    description: 'Set your own schedule and preferences for each relationship',
    icon: '⚙️'
  }
];

const Features = () => {
  return (
    <section id="features" className="bg-gray-50 py-20">
      <div className="section-container">
        <h2 className="section-title">Features You'll Love</h2>
        <p className="section-subtitle">
          Designed to help you nurture your most important relationships without the effort
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
