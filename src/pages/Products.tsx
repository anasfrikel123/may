import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Filter, ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import { products } from '../data';
import { Product } from '../types';

const Products: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');
  const featuredParam = queryParams.get('featured') === 'true';
  
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeCategory, setActiveCategory] = useState<string | null>(categoryParam);
  const [showFeatured, setShowFeatured] = useState<boolean>(featuredParam);
  const [sortBy, setSortBy] = useState<string>('default');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (activeCategory) {
      result = result.filter(product => product.category === activeCategory);
    }
    
    // Filter by featured
    if (showFeatured) {
      result = result.filter(product => product.featured);
    }
    
    // Filter by price range
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Sort products
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    setFilteredProducts(result);
  }, [activeCategory, showFeatured, sortBy, priceRange]);
  
  useEffect(() => {
    // Update filters when URL params change
    setActiveCategory(categoryParam);
    setShowFeatured(featuredParam);
  }, [categoryParam, featuredParam]);
  
  const handleCategoryChange = (category: string | null) => {
    setActiveCategory(category);
  };
  
  const handlePriceRangeChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = parseInt(event.target.value);
    const newRange = [...priceRange] as [number, number];
    newRange[index] = value;
    setPriceRange(newRange);
  };
  
  return (
    <div>
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold text-gray-900">Our Collections</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our range of sustainable, ethically-made clothing and accessories, designed with both style and the planet in mind.
            </p>
          </div>
        </div>
      </section>
      
      {/* Ecommerce Products List Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-start lg:gap-8">
            {/* Filters - Desktop */}
            <div className="hidden lg:block lg:w-1/4">
              <div className="sticky top-24 space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    <button 
                      className={`block w-full text-left px-3 py-2 rounded-md ${activeCategory === null ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                      onClick={() => handleCategoryChange(null)}
                    >
                      All Products
                    </button>
                    <button 
                      className={`block w-full text-left px-3 py-2 rounded-md ${activeCategory === 'women' ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                      onClick={() => handleCategoryChange('women')}
                    >
                      Women's Collection
                    </button>
                    <button 
                      className={`block w-full text-left px-3 py-2 rounded-md ${activeCategory === 'men' ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                      onClick={() => handleCategoryChange('men')}
                    >
                      Men's Collection
                    </button>
                    <button 
                      className={`block w-full text-left px-3 py-2 rounded-md ${activeCategory === 'accessories' ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                      onClick={() => handleCategoryChange('accessories')}
                    >
                      Accessories
                    </button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Price Range</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">${priceRange[0]}</span>
                      <span className="text-gray-600">${priceRange[1]}</span>
                    </div>
                    <div className="flex gap-4">
                      <input
                        type="range"
                        min="0"
                        max="200"
                        value={priceRange[0]}
                        onChange={(e) => handlePriceRangeChange(e, 0)}
                        className="w-full"
                      />
                      <input
                        type="range"
                        min="0"
                        max="200"
                        value={priceRange[1]}
                        onChange={(e) => handlePriceRangeChange(e, 1)}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Filter</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={showFeatured}
                        onChange={() => setShowFeatured(!showFeatured)}
                        className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                      />
                      <span className="ml-2 text-gray-600">Featured Items</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Sort By</h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-black focus:border-black sm:text-sm rounded-md"
                  >
                    <option value="default">Default</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name">Name</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Mobile Filters Button */}
            <div className="lg:hidden mb-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-between w-full px-4 py-3 bg-gray-100 rounded-md"
              >
                <div className="flex items-center">
                  <Filter size={20} className="mr-2" />
                  <span>Filters & Sorting</span>
                </div>
                {showFilters ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {/* Mobile Filters Panel */}
              {showFilters && (
                <div className="mt-4 p-4 bg-white border border-gray-200 rounded-md">
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Categories</h3>
                    <div className="space-y-2">
                      <button 
                        className={`block w-full text-left px-3 py-2 rounded-md ${activeCategory === null ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                        onClick={() => handleCategoryChange(null)}
                      >
                        All Products
                      </button>
                      <button 
                        className={`block w-full text-left px-3 py-2 rounded-md ${activeCategory === 'women' ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                        onClick={() => handleCategoryChange('women')}
                      >
                        Women's Collection
                      </button>
                      <button 
                        className={`block w-full text-left px-3 py-2 rounded-md ${activeCategory === 'men' ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                        onClick={() => handleCategoryChange('men')}
                      >
                        Men's Collection
                      </button>
                      <button 
                        className={`block w-full text-left px-3 py-2 rounded-md ${activeCategory === 'accessories' ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                        onClick={() => handleCategoryChange('accessories')}
                      >
                        Accessories
                      </button>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Price Range</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">${priceRange[0]}</span>
                        <span className="text-gray-600">${priceRange[1]}</span>
                      </div>
                      <div className="flex gap-4">
                        <input
                          type="range"
                          min="0"
                          max="200"
                          value={priceRange[0]}
                          onChange={(e) => handlePriceRangeChange(e, 0)}
                          className="w-full"
                        />
                        <input
                          type="range"
                          min="0"
                          max="200"
                          value={priceRange[1]}
                          onChange={(e) => handlePriceRangeChange(e, 1)}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Filter</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={showFeatured}
                          onChange={() => setShowFeatured(!showFeatured)}
                          className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                        />
                        <span className="ml-2 text-gray-600">Featured Items</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Sort By</h3>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-black focus:border-black sm:text-sm rounded-md"
                    >
                      <option value="default">Default</option>
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                      <option value="name">Name</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
            
            {/* Products Grid */}
            <div className="lg:w-3/4">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-600">No products match your current filters. Try adjusting your criteria.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="group">
                      <div className="relative">
                        <Link to={`/product/${product.id}`}>
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-80 object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300 rounded-lg"></div>
                        </Link>
                        {product.new && (
                          <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 text-xs font-bold rounded-full">
                            New
                          </div>
                        )}
                      </div>
                      <div className="mt-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          <Link to={`/product/${product.id}`}>{product.name}</Link>
                        </h3>
                        <p className="mt-1 text-gray-600">${product.price.toFixed(2)}</p>
                        <div className="mt-2">
                          <Link 
                            to={`/product/${product.id}`}
                            className="text-sm font-medium text-black hover:underline"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Feature Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold text-gray-900">New Arrivals</h2>
              <p className="mt-4 text-lg text-gray-600">
                Check out our latest additions to the May Style collection. Featuring seasonal pieces designed with sustainability in mind.
              </p>
              <div className="mt-8">
                <Link 
                  to="/products?new=true"
                  className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-800"
                >
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/images/new-arrivals.jpg" 
                alt="New arrivals banner" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Products;