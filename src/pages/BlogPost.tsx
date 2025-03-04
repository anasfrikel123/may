import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Tag, Facebook, Twitter, Instagram, Share2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import { blogPosts } from '../data';
import { BlogPost as BlogPostType } from '../types';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);

  useEffect(() => {
    if (!id) return;

    const foundPost = blogPosts.find((p) => p.id === id);
    if (foundPost) {
      setPost(foundPost);

      const related = blogPosts
        .filter((p) => p.id !== id && p.tags.some((tag) => foundPost.tags.includes(tag)))
        .slice(0, 3);
      setRelatedPosts(related);
    }
  }, [id]);

  if (!post) {
    return (
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Article not found</h1>
          <p className="mt-4 text-gray-600">The article you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/blog"
            className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800"
          >
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      {/* Header Section */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
          <div className="mt-2 flex items-center text-gray-500">
            <Calendar className="w-5 h-5 mr-2" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <User className="w-5 h-5 ml-4 mr-2" />
            <span>{post.author}</span>
            <Tag className="w-5 h-5 ml-4 mr-2" />
            <span>{post.tags.join(', ')}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <article className="prose lg:prose-xl">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        {/* Social Share Sidebar */}
        <div className="hidden lg:block fixed left-8 top-1/2 transform -translate-y-1/2 space-y-4">
          {[Facebook, Twitter, Instagram, Share2].map((Icon, index) => (
            <button key={index} className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
              <Icon size={20} />
            </button>
          ))}
        </div>

        {/* Author Bio */}
        <div className="mt-16 border-t border-gray-200 pt-8">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-14 w-14 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xl">
                {post.author.charAt(0)}
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-gray-900">{post.author}</h3>
              <p className="text-gray-600">Fashion Writer & Sustainability Advocate</p>
            </div>
          </div>
          <p className="mt-4 text-gray-600">
            With a background in sustainable fashion and a passion for ethical production, our writers bring expert insights to the May Style blog.
          </p>
        </div>

        {/* Mobile Social Share */}
        <div className="mt-8 flex justify-center space-x-4 lg:hidden">
          {[Facebook, Twitter, Instagram, Share2].map((Icon, index) => (
            <button key={index} className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
              <Icon size={20} />
            </button>
          ))}
        </div>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>

              <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.id} className="flex flex-col rounded-lg overflow-hidden">
                    <div className="flex-shrink-0">
                      <img src={relatedPost.image} alt={relatedPost.title} className="h-48 w-full object-cover" />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Calendar size={16} className="mr-2" />
                          <span>{relatedPost.date}</span>
                        </div>
                        <Link to={`/blog/${relatedPost.id}`} className="block">
                          <h3 className="text-xl font-semibold text-gray-900">{relatedPost.title}</h3>
                          <p className="mt-3 text-base text-gray-600">{relatedPost.excerpt}</p>
                        </Link>
                      </div>
                      <div className="mt-6">
                        <Link to={`/blog/${relatedPost.id}`} className="text-base font-medium text-black hover:text-gray-700">
                          Read more <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default BlogPost;
