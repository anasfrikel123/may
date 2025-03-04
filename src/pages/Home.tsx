import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Truck, RotateCcw, Users, Globe, ShoppingBag } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import { products, testimonials, teamMembers } from '../data';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      
      {/* Hero Header Section */}
      <section className="relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              Timeless Style, <br />Sustainable Future
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-lg">
              Discover our collection of ethically made, eco-friendly clothing that combines traditional craftsmanship with contemporary design.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                Shop Collection
              </Link>
              <Link to="/about" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                Our Story
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="May Style featured product" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-sm font-medium text-gray-500">Featured Product</p>
              <p className="text-lg font-bold text-gray-900">Eco-Friendly Linen Dress</p>
              <Link to="/products/1" className="mt-1 inline-flex items-center text-sm font-medium text-black">
                Shop now <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Feature Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose May Style</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to creating beautiful clothing that respects both people and the planet.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-green-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Eco-Friendly Materials</h3>
              <p className="mt-4 text-gray-600">
                We use organic cotton, linen, and other sustainable materials that minimize environmental impact.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Unique Designs</h3>
              <p className="mt-4 text-gray-600">
                Our designs blend traditional Moroccan aesthetics with contemporary styles for truly unique pieces.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-purple-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <ShoppingBag className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Local Craftsmanship</h3>
              <p className="mt-4 text-gray-600">
                We work with skilled local artisans, preserving traditional techniques and supporting our community.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features List Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Collections</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated collections, designed with both style and sustainability in mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Women's Collection" 
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="text-center p-4">
                  <h3 className="text-2xl font-bold text-white">Women's Collection</h3>
                  <Link to="/products?category=women" className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100">
                    Explore
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Men's Collection" 
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="text-center p-4">
                  <h3 className="text-2xl font-bold text-white">Men's Collection</h3>
                  <Link to="/products?category=men" className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100">
                    Explore
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Accessories" 
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="text-center p-4">
                  <h3 className="text-2xl font-bold text-white">Accessories</h3>
                  <Link to="/products?category=accessories" className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100">
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Shopping Benefits</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We strive to make your shopping experience as enjoyable and hassle-free as possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                <Truck className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Free Shipping</h3>
              <p className="mt-2 text-gray-600">
                Enjoy free shipping on all orders over $100, with delivery within 3-5 business days.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                <RotateCcw className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Easy Returns</h3>
              <p className="mt-2 text-gray-600">
                Not satisfied? Return your items within 30 days for a full refund or exchange.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                <Users className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Member Discounts</h3>
              <p className="mt-2 text-gray-600">
                Join our loyalty program to receive exclusive discounts and early access to new collections.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Additional Services</h2>
              <p className="mt-4 text-lg text-gray-600">
                Beyond our collections, we offer personalized services to ensure you get exactly what you need.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Custom Tailoring</h3>
                    <p className="mt-2 text-base text-gray-600">
                      Get the perfect fit with our custom tailoring service, available for select items in our collection.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Style Consultations</h3>
                    <p className="mt-2 text-base text-gray-600">
                      Book a one-on-one consultation with our stylists to create a wardrobe that reflects your personal style.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Garment Care</h3>
                    <p className="mt-2 text-base text-gray-600">
                      Learn how to care for your May Style pieces to ensure they last for years to come.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/about" className="text-base font-medium text-black hover:text-gray-700">
                  Learn more about our services <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Tailoring service" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <p className="text-5xl font-bold text-black">10+</p>
              <p className="mt-2 text-lg text-gray-600">Years in Business</p>
            </div>
            
            <div className="text-center">
              <p className="text-5xl font-bold text-black">15k+</p>
              <p className="mt-2 text-lg text-gray-600">Happy Customers</p>
            </div>
            
            <div className="text-center">
              <p className="text-5xl font-bold text-black">25+</p>
              <p className="mt-2 text-lg text-gray-600">Countries Shipped To</p>
            </div>
            
            <div className="text-center">
              <p className="text-5xl font-bold text-black">100%</p>
              <p className="mt-2 text-lg text-gray-600">Sustainable Materials</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What Our Customers Say</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it—hear from our satisfied customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Join the May Style Community</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Sign up for our newsletter to receive updates on new arrivals, exclusive offers, and styling tips.
          </p>
          <div className="mt-8">
            <Link to="#newsletter" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
              Subscribe Now
            </Link>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <div id="newsletter">
        <Newsletter />
      </div>
      
      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Meet Our Team</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind May Style who bring our vision to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="mx-auto h-64 w-64 rounded-full object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                  <p className="mt-2 text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;