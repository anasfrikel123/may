import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import { blogPosts } from '../data';

const Blog: React.FC = () => {
  // Get featured post
  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];
  
  // Get remaining posts
  const remainingPosts = blogPosts.filter(post => post.id !== featuredPost.id);
  
  return (
    <div>
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold text-gray-900">Our Blog</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, stories, and updates from the world of sustainable fashion.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Post Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Post</h2>
          
          <div className="lg:flex lg:items-center lg:gap-12">
            <div className="lg:w-1/2">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar size={16} className="mr-2" />
                <span>{featuredPost.date}</span>
                <span className="mx-2">•</span>
                <User size={16} className="mr-2" />
                <span>{featuredPost.author}</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">{featuredPost.title}</h3>
              <p className="mt-4 text-lg text-gray-600">{featuredPost.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {featuredPost.tags.map((tag, index) => (
                  <span key={index} className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <Link 
                  to={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts Grid Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {remainingPosts.map((post) => (
              <div key={post.id} className="flex flex-col rounded-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="h-48 w-full object-cover"
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar size={16} className="mr-2" />
                      <span>{post.date}</span>
                    </div>
                    <Link to={`/blog/${post.id}`} className="block">
                      <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
                      <p className="mt-3 text-base text-gray-600">{post.excerpt}</p>
                    </Link>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">{post.author}</span>
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                        {post.author.charAt(0)}
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{post.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Join the Conversation</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest articles, fashion tips, and exclusive content directly in your inbox.
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
      
      <Footer />
    </div>
  );
};

export default Blog;