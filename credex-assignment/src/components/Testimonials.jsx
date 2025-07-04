import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Jane Doe',
      role: 'IT Manager',
      company: 'TechCorp',
      review: 'SoftSell made selling our unused licenses a breeze. The process was fast, and the valuation was fair!',
    },
    {
      name: 'John Smith',
      role: 'CFO',
      company: 'GrowEasy',
      review: 'I was impressed by how quickly we got paid. SoftSell is reliable and highly recommended!',
    },
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{review.review}"</p>
              <p className="font-semibold">{review.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{review.role}, {review.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;