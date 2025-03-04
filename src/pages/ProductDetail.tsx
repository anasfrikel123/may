import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Heart, Share2, Check, ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import { products } from '../data';
import { Product } from '../types';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [showDescription, setShowDescription] = useState<boolean>(true);
  const [showShipping, setShowShipping] = useState<boolean>(false);
  const [showReturns, setShowReturns] = useState<boolean>(false);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Find the product by ID
    const foundProduct = products.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedColor(foundProduct.colors[0]);
      setSelectedSize(foundProduct.sizes[0]);
      
      // Find related products (same category, excluding current product)
      const related = products
        .filter(p => p.category === foundProduct.category && p.id !== id)
        .slice(0, 3);
      setRelatedProducts(related);
    }
  }, [id]);
  
  if (!product) {
    return (
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
          <p className="mt-4 text-gray-600">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/products" className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800">
            Back to Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };
  
  const toggleSection = (section: 'description' | 'shipping' | 'returns') => {
    if (section === 'description') {
      setShowDescription(!showDescription);
    } else if (section === 'shipping') {
      setShowShipping(!showShipping);
    } else if (section === 'returns') {
      setShowReturns(!showReturns);
    }
  };
  
  return (
    <div>
      <Navbar />
      
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link to="/products" className="text-gray-500 hover:text-gray-700">Products</Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link to={`/products?category=${product.category}`} className="text-gray-500 hover:text-gray-700">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-900 font-medium">{product.name}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      
      {/* Product Detail Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            {/* Product Image */}
            <div>
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>
            
            {/* Product Info */}
            <div className="mt-10 lg:mt-0">
              {product.new && (
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-4">
                  New Arrival
                </span>
              )}
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="mt-3 text-2xl text-gray-900">${product.price.toFixed(2)}</p>
              
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Description</h3>
                <p className="mt-2 text-gray-600">{product.description}</p>
              </div>
              
              {/* Color Selector */}
              <div className="mt-8">
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
                <div className="mt-2 flex items-center space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={`relative w-8 h-8 rounded-full flex items-center justify-center ${
                        selectedColor === color 
                          ? 'ring-2 ring-offset-2 ring-black' 
                          : 'ring-1 ring-gray-200'
                      }`}
                      style={{ backgroundColor: color.toLowerCase() === 'white' ? '#fff' : color.toLowerCase() === 'black' ? '#000' : color.toLowerCase() }}
                      onClick={() => setSelectedColor(color)}
                    >
                      {selectedColor === color && (
                        <Check className="h-4 w-4 text-white" style={{ color: color.toLowerCase() === 'white' ? '#000' : '#fff' }} />
                      )}
                      <span className="sr-only">{color}</span>
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-sm text-gray-500">Selected: {selectedColor}</p>
              </div>
              
              {/* Size Selector */}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a href="#" className="text-sm font-medium text-black hover:text-gray-700">Size guide</a>
                </div>
                <div className="mt-2 grid grid-cols-4 gap-2 sm:grid-cols-6">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`group relative border rounded-md py-2 px-4 flex items-center justify-center text-sm font-medium ${
                        selectedSize === size
                          ? 'bg-black text-white'
                          : 'bg-white text-gray-900 hover:bg-gray-50'
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      <span>{size}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quantity Selector */}
              <div className="mt-8">
                <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
                <div className="mt-2 flex items-center">
                  <button
                    className="p-2 border border-gray-300 rounded-l-md"
                    onClick={() => handleQuantityChange(quantity - 1)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                    className="p-2 w-16 text-center border-t border-b border-gray-300"
                  />
                  <button
                    className="p-2 border border-gray-300 rounded-r-md"
                    onClick={() => handleQuantityChange(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Add to Cart Button */}
              <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <button
                  type="button"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Add to Cart
                </button>
                <button
                  type="button"
                  className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Wishlist
                </button>
              </div>
              
              {/* Product Details Accordion */}
              <div className="mt-10 border-t border-gray-200 pt-10">
                <div className="border-b border-gray-200">
                  <button
                    className="flex w-full justify-between items-center py-4 text-left"
                    onClick={() => toggleSection('description')}
                  >
                    <span className="text-lg font-medium text-gray-900">Product Details</span>
                    {showDescription ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </button>
                  {showDescription && (
                    <div className="pb-4 prose prose-sm">
                      <p className="text-gray-600">{product.description}</p>
                      <ul className="mt-4 list-disc pl-5 space-y-2">
                        <li>Made from sustainable materials</li>
                        <li>Ethically produced in Morocco</li>
                        <li>Designed for comfort and durability</li>
                        <li>Available in multiple colors and sizes</li>
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="border-b border-gray-200">
                  <button
                    className="flex w-full justify-between items-center py-4 text-left"
                    onClick={() => toggleSection('shipping')}
                  >
                    <span className="text-lg font-medium text-gray-900">Shipping & Delivery</span>
                    {showShipping ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </button>
                  {showShipping && (
                    <div className="pb-4 prose prose-sm">
                      <p className="text-gray-600">We offer the following shipping options:</p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex justify-between">
                          <span>Standard Shipping (3-5 business days)</span>
                          <span>$5.99</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Express Shipping (1-2 business days)</span>
                          <span>$12.99</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Free Shipping on orders over $100</span>
                          <span>$0.00</span>
                        </li>
                      </ul>
                      <p className="mt-4 text-gray-600">
                        Please note that delivery times may vary depending on your location.
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="border-b border-gray-200">
                  <button
                    className="flex w-full justify-between items-center py-4 text-left"
                    onClick={() => toggleSection('returns')}
                  >
                    <span className="text-lg font-medium text-gray-900">Returns & Exchanges</span>
                    {showReturns ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </button>
                  {showReturns && (
                    <div className="pb-4 prose prose-sm">
                      <p className="text-gray-600">
                        We want you to be completely satisfied with your purchase. If for any reason you're not happy with your order, we offer a simple return and exchange policy.
                      </p>
                      <ul className="mt-4 list-disc pl-5 space-y-2">
                        <li>Returns accepted within 30 days of purchase</li>
                        <li>Items must be unworn, unwashed, and with original tags attached</li>
                        <li>Refunds will be issued to the original payment method</li>
                        <li>Exchanges are subject to availability</li>
                      </ul>
                      <p className="mt-4 text-gray-600">
                        To initiate a return or exchange, please contact our customer service team.
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Share */}
              <div className="mt-8 flex items-center space-x-4">
                <span className="text-gray-500">Share:</span>
                <button className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Pinterest</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" fillRule="evenodd" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You may also like</h2>
          
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="group">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={`/product/${relatedProduct.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {relatedProduct.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{relatedProduct.colors.join(', ')}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">${relatedProduct.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductDetail;