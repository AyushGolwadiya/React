import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Fast Payments',
      description: 'Get paid within 24 hours of accepting an offer.',
      icon: '⚡',
    },
    {
      title: 'Secure Transactions',
      description: 'Your data is protected with top-tier encryption.',
      icon: '🔒',
    },
    {
      title: 'Expert Valuation',
      description: 'Our team ensures you get the best value for your licenses.',
      icon: '📊',
    },
    {
      title: '24/7 Support',
      description: 'We’re here to help anytime you need us.',
      icon: '📞',
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose SoftSell?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;