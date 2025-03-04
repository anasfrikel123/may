import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this to your backend
    console.log('Subscribing email:', email);
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Stay in the loop</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates on new arrivals, special offers, and exclusive content.
          </p>
        </div>
        
        <div className="mt-8 max-w-xl mx-auto">
          {isSubmitted ? (
            <div className="bg-green-50 p-4 rounded-md">
              <p className="text-green-800 text-center font-medium">
                Thank you for subscribing! We'll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="sm:flex">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3 placeholder-gray-500 focus:ring-black focus:border-black border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  Subscribe
                </button>
              </div>
            </form>
          )}
          <p className="mt-3 text-sm text-gray-500 text-center">
            We care about your data. Read our{' '}
            <a href="#" className="font-medium text-black underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;