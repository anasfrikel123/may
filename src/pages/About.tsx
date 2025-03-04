import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Heart, Leaf } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import { teamMembers } from '../data';

const About: React.FC = () => {
  return (
    <div>
      <Navbar />
      
      {/* Header Section */}
      <section className="relative bg-gray-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              Our Story
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              May Style was born from a passion for beautiful clothing and a commitment to sustainable, ethical fashion. Learn about our journey and the values that drive us.
            </p>
          </div>
          <div className="mt-12">
            <img 
              src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
              alt="May Style store in Tangier" 
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Journey</h2>
              <div className="mt-6 text-lg text-gray-600 space-y-6">
                <p>
                  May Style was founded in 2015 by Maya Johnson, a fashion designer with a vision to create clothing that celebrates traditional craftsmanship while embracing modern, sustainable practices.
                </p>
                <p>
                  After working in the fast fashion industry for several years, Maya became disillusioned with the environmental impact and ethical concerns of mass-produced clothing. She decided to create a brand that would prioritize quality over quantity, fair labor practices, and environmental responsibility.
                </p>
                <p>
                  Starting with a small collection of handcrafted accessories, May Style quickly gained recognition for its commitment to sustainability and unique designs. Today, we offer a full range of clothing and accessories for both men and women, all made with the same dedication to quality and ethics that inspired our founding.
                </p>
                <p>
                  Our flagship store in Tangier serves as both a retail space and a workshop where customers can see our artisans at work, creating the pieces that make May Style special.
                </p>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Artisan working" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Feature Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Core Values</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from design to production to customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="bg-green-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Sustainability</h3>
              <p className="mt-4 text-gray-600">
                We're committed to minimizing our environmental impact through responsible sourcing, waste reduction, and eco-friendly practices throughout our supply chain.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Quality</h3>
              <p className="mt-4 text-gray-600">
                We believe in creating garments that stand the test of time, both in terms of durability and style. Each piece is crafted with attention to detail and a commitment to excellence.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="bg-purple-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Community</h3>
              <p className="mt-4 text-gray-600">
                We support local artisans and communities, ensuring fair wages and safe working conditions. We believe that fashion can be a force for positive social change.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Journey</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones in the May Style story.
            </p>
          </div>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
            
            <div className="relative z-10">
              {/* 2015 */}
              <div className="mb-16 flex items-center">
                <div className="flex flex-col items-center w-1/2 pr-8 text-right">
                  <div className="mb-2">
                    <span className="inline-flex items-center justify-center px-3 py-1 text-sm font-semibold rounded-full bg-gray-100 text-gray-800">
                      2015
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">May Style Founded</h3>
                  <p className="mt-2 text-gray-600">
                    Maya Johnson establishes May Style with a small collection of handcrafted accessories.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-black"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              {/* 2017 */}
              <div className="mb-16 flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-black"></div>
                <div className="flex flex-col items-center w-1/2 pl-8">
                  <div className="mb-2">
                    <span className="inline-flex items-center justify-center px-3 py-1 text-sm font-semibold rounded-full bg-gray-100 text-gray-800">
                      2017
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">First Retail Store</h3>
                  <p className="mt-2 text-gray-600">
                    Opening of our flagship store in Tangier, combining retail space with a workshop.
                  </p>
                </div>
              </div>
              
              {/* 2019 */}
              <div className="mb-16 flex items-center">
                <div className="flex flex-col items-center w-1/2 pr-8 text-right">
                  <div className="mb-2">
                    <span className="inline-flex items-center justify-center px-3 py-1 text-sm font-semibold rounded-full bg-gray-100 text-gray-800">
                      2019
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Expanded Collections</h3>
                  <p className="mt-2 text-gray-600">
                    Launch of our first full clothing collections for both men and women.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-black"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              {/* 2021 */}
              <div className="mb-16 flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-black"></div>
                <div className="flex flex-col items-center w-1/2 pl-8">
                  <div className="mb-2">
                    <span className="inline-flex items-center justify-center px-3 py-1 text-sm font-semibold rounded-full bg-gray-100 text-gray-800">
                      2021
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Sustainability Certification</h3>
                  <p className="mt-2 text-gray-600">
                    Achieved B Corp certification, recognizing our commitment to social and environmental responsibility.
                  </p>
                </div>
              </div>
              
              {/* 2023 */}
              <div className="mb-16 flex items-center">
                <div className="flex flex-col items-center w-1/2 pr-8 text-right">
                  <div className="mb-2">
                    <span className="inline-flex items-center justify-center px-3 py-1 text-sm font-semibold rounded-full bg-gray-100 text-gray-800">
                      2023
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">International Expansion</h3>
                  <p className="mt-2 text-gray-600">
                    May Style begins shipping to over 25 countries worldwide, bringing sustainable fashion to a global audience.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-black"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              {/* 2025 */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-black"></div>
                <div className="flex flex-col items-center w-1/2 pl-8">
                  <div className="mb-2">
                    <span className="inline-flex items-center justify-center px-3 py-1 text-sm font-semibold rounded-full bg-gray-100 text-gray-800">
                      2025
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">10 Year Anniversary</h3>
                  <p className="mt-2 text-gray-600">
                    Celebrating a decade of sustainable fashion with a special anniversary collection and community events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section id="team" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Meet Our Team</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate individuals who bring May Style to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="mx-auto h-64 w-64 rounded-full object-cover"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                  <p className="mt-3 text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Behind the Scenes</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              A glimpse into our world—from our workshop to our store.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            <div className="relative h-64">
              <img 
                src="https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Workshop" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64">
              <img 
                src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Store front" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64">
              <img 
                src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Fabric selection" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64">
              <img 
                src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Design process" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64">
              <img 
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Team meeting" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64">
              <img 
                src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Tailoring" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64">
              <img 
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Clothing display" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Community event" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Partner Logos List Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Partners</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We're proud to collaborate with these organizations who share our values.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex justify-center items-center h-24 bg-white p-4 rounded-lg">
              <svg className="h-12 text-gray-400" fill="currentColor" viewBox="0 0 100 30">
                <path d="M5 5h90v20H5z" />
              </svg>
            </div>
            <div className="flex justify-center items-center h-24 bg-white p-4 rounded-lg">
              <svg className="h-12 text-gray-400" fill="currentColor" viewBox="0 0 100 30">
                <path d="M5 5h90v20H5z" />
              </svg>
            </div>
            <div className="flex justify-center items-center h-24 bg-white p-4 rounded-lg">
              <svg className="h-12 text-gray-400" fill="currentColor" viewBox="0 0 100 30">
                <path d="M5 5h90v20H5z" />
              </svg>
            </div>
            <div className="flex justify-center items-center h-24 bg-white p-4 rounded-lg">
              <svg className="h-12 text-gray-400" fill="currentColor" viewBox="0 0 100 30">
                <path d="M5 5h90v20H5z" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Discover Our Collections</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our range of sustainable, ethically-made clothing and accessories.
          </p>
          <div className="mt-8">
            <Link to="/products" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
              Shop Now
            </Link>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Get in Touch</h2>
              <p className="mt-4 text-lg text-gray-600">
                We'd love to hear from you. Visit our store, give us a call, or send us an email.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-100 text-black">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Visit Our Store</h3>
                    <p className="mt-2 text-base text-gray-600">
                      123 Fashion St, Tangier, Morocco
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-100 text-black">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
                    <p className="mt-2 text-base text-gray-600">
                      +212 555-1234
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-100 text-black">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                    <p className="mt-2 text-base text-gray-600">
                      info@maystyle.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-gray-100 p-6 rounded-lg">
                <iframe 
                  className="w-full h-80 rounded-lg" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51685.374800565066!2d-5.833954!3d35.759465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b875cf04c132d%3A0x76bfc571bfb4e17a!2sTangier%2C%20Morocco!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Newsletter />
      <Footer />
    </div>
  );
};

export default About;