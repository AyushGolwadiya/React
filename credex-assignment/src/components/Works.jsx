import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      title: 'Upload License',
      description: 'Submit your software license details securely through our platform.',
      icon: '📤',
    },
    {
      title: 'Get Valuation',
      description: 'Receive a fair and transparent valuation within hours.',
      icon: '💰',
    },
    {
      title: 'Get Paid',
      description: 'Accept the offer and get paid quickly via your preferred method.',
      icon: '🏦',
    },
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;