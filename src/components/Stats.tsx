
import React from 'react';

const stats = [
  {
    value: '$2.4B+',
    label: 'Assets Managed',
  },
  {
    value: '96%',
    label: 'Client Satisfaction',
  },
  {
    value: '320K+',
    label: 'Active Users',
  },
  {
    value: '4.8',
    label: 'App Store Rating',
  },
];

const Stats = () => {
  return (
    <section className="bg-pingup-purple py-16">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white text-opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
