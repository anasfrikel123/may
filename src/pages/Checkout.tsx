import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { products } from '../data';

// Mock cart items
const cartItems = [
  {
    id: '1',
    product: products[0],
    quantity: 1,
    color: 'White',
    size: 'M'
  },
  {
    id: '2',
    product: products[2],
    quantity: 1,
    color: 'Brown',
    size: 'M'
  }
];

const Checkout: React.FC = () => {
  const [step, setStep] = useState<'information' | 'shipping' | 'payment' | 'confirmation'>('information');
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    country: 'United States',
    state: '',
    zipCode: '',
    phone: '',
    shippingMethod: 'standard',
    paymentMethod: 'credit-card',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'information') {
      setStep('shipping');
    } else if (step === 'shipping') {
      setStep('payment');
    } else if (step === 'payment') {
      setStep('confirmation');
    }
  };
  
  const subtotal = cartItems.reduce((total, item) => 
    total + (item.product.price * item.quantity), 0
  );
  
  const shipping = formData.shippingMethod === 'express' ? 12.99 : (subtotal > 100 ? 0 : 5.99);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;
  
  return (
    <div>
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {step === 'confirmation' ? (
          <div className="max-w-3xl mx-auto text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Thank you for your order!</h1>
            <p className="mt-4 text-lg text-gray-600">
              Your order has been placed and will be processed soon. We've sent a confirmation email to {formData.email}.
            </p>
            <p className="mt-2 text-gray-600">
              Order number: <span className="font-medium">MAY-{Math.floor(Math.random() * 10000)}</span>
            </p>
            
            <div className="mt-12 bg-gray-50 rounded-lg p-6 text-left">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
              
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="py-4 flex">
                    <div className="flex-shrink-0 w-16 h-16 border border-gray-200 rounded-md overflow-hidden">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-1 flex flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{item.product.name}</h3>
                          <p className="ml-4">${(item.product.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.color}, {item.size} × {item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <p>Subtotal</p>
                  <p>${subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-gray-600">
                  <p>Shipping</p>
                  <p>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</p>
                </div>
                <div className="flex justify-between text-gray-600">
                  <p>Tax</p>
                  <p>${tax.toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-lg font-medium text-gray-900 pt-2 border-t border-gray-200">
                  <p>Total</p>
                  <p>${total.toFixed(2)}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-7">
              <Link
                to={step === 'information' ? '/cart' : '#'}
                onClick={(e) => {
                  if (step !== 'information') {
                    e.preventDefault();
                    setStep(step === 'shipping' ? 'information' : 'shipping');
                  }
                }}
                className="inline-flex items-center text-sm font-medium text-black hover:text-gray-700"
              >
                <ArrowLeft size={16} className="mr-1" />
                {step === 'information' ? 'Return to cart' : 'Back'}
              </Link>
              
              <h1 className="mt-4 text-2xl font-bold text-gray-900">Checkout</h1>
              
              {/* Checkout Steps */}
              <div className="mt-6">
                <div className="flex items-center">
                  <div className={`flex items-center justify-center h-8 w-8 rounded-full ${step === 'information' || step === 'shipping' || step === 'payment' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}>
                    1
                  </div>
                  <div className={`h-1 flex-1 mx-2 ${step === 'information' || step === 'shipping' || step === 'payment' ? 'bg-black' : 'bg-gray-200'}`}></div>
                  <div className={`flex items-center justify-center h-8 w-8 rounded-full ${step === 'shipping' || step === 'payment' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}>
                    2
                  </div>
                  <div className={`h-1 flex-1 mx-2 ${step === 'shipping' || step === 'payment' ? 'bg-black' : 'bg-gray-200'}`}></div>
                  <div className={`flex items-center justify-center h-8 w-8 rounded-full ${step === 'payment' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}>
                    3
                  </div>
                </div>
                <div className="flex justify-between text-xs mt-2">
                  <span>Information</span>
                  <span>Shipping</span>
                  <span>Payment</span>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="mt-8">
                {/* Information Step */}
                {step === 'information' && (
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                        />
                      </div>
                      
                      <h2 className="text-lg font-medium text-gray-900 pt-4">Shipping Address</h2>
                      
                      <div className="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name</label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name</label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                          />
                        </div>
                        
                        <div className="sm:col-span-2">
                          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                          />
                        </div>
                        
                        <div className="sm:col-span-2">
                          <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">
                            Apartment, suite, etc. (optional)
                          </label>
                          <input
                            type="text"
                            id="apartment"
                            name="apartment"
                            value={formData.apartment}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                          <select
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                          >
                            <option value="United States">United States</option>
                            <option value="Canada">Canada</option>
                            <option value="Mexico">Mexico</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="France">France</option>
                            <option value="Germany">Germany</option>
                            <option value="Morocco">Morocco</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="state" className="block text-sm font-medium text-gray-700">State / Province</label>
                          <input
                            type="text"
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
                          <input
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                          />
                        </div>
                        
                        <div className="sm:col-span-2">
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Shipping Step */}
                {step === 'shipping' && (
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Shipping Method</h2>
                    
                    <div className="space-y-4">
                      <div className="border border-gray-300 rounded-md p-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="shippingMethod"
                            value="standard"
                            checked={formData.shippingMethod === 'standard'}
                            onChange={handleChange}
                            className="h-4 w-4 text-black focus:ring-black border-gray-300"
                          />
                          <div className="ml-3 flex-1">
                            <span className="block text-sm font-medium text-gray-900">Standard Shipping</span>
                            <span className="block text-sm text-gray-500">3-5 business days</span>
                          </div>
                          <span className="text-sm font-medium text-gray-900">
                            {subtotal > 100 ? 'Free' : '$5.99'}
                          </span>
                        </label>
                      </div>
                      
                      <div className="border border-gray-300 rounded-md p-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="shippingMethod"
                            value="express"
                            checked={formData.shippingMethod === 'express'}
                            onChange={handleChange}
                            className="h-4 w-4 text-black focus:ring-black border-gray-300"
                          />
                          <div className="ml-3 flex-1">
                            <span className="block text-sm font-medium text-gray-900">Express Shipping</span>
                            <span className="block text-sm text-gray-500">1-2 business days</span>
                          </div>
                          <span className="text-sm font-medium text-gray-900">$12.99</span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Payment Step */}
                {step === 'payment' && (
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Payment Method</h2>
                    
                    <div className="space-y-4">
                      <div className="border border-gray-300 rounded-md p-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="credit-card"
                            checked={formData.paymentMethod === 'credit-card'}
                            onChange={handleChange}
                            className="h-4 w-4 text-black focus:ring-black border-gray-300"
                          />
                          <div className="ml-3 flex items-center">
                            <span className="text-sm font-medium text-gray-900 mr-2">Credit Card</span>
                            <CreditCard size={20} className="text-gray-500" />
                          </div>
                        </label>
                      </div>
                      
                      {formData.paymentMethod === 'credit-card' && (
                        <div className="mt-4 space-y-4">
                          <div>
                            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card number</label>
                            <input
                              type="text"
                              id="cardNumber"
                              name="cardNumber"
                              value={formData.cardNumber}
                              onChange={handleChange}
                              placeholder="1234 5678 9012 3456"
                              required
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">Name on card</label>
                            <input
                              type="text"
                              id="cardName"
                              name="cardName"
                              value={formData.cardName}
                              onChange={handleChange}
                              required
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                            />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry date (MM/YY)</label>
                              <input
                                type="text"
                                id="expiryDate"
                                name="expiryDate"
                                value={formData.expiryDate}
                                onChange={handleChange}
                                placeholder="MM/YY"
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                              />
                            </div>
                            
                            <div>
                              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                              <input
                                type="text"
                                id="cvv"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleChange}
                                placeholder="123"
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div className="border border-gray-300 rounded-md p-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="paypal"
                            checked={formData.paymentMethod === 'paypal'}
                            onChange={handleChange}
                            className="h-4 w-4 text-black focus:ring-black border-gray-300"
                          />
                          <div className="ml-3">
                            <span className="text-sm font-medium text-gray-900">PayPal</span>
                          </div>
                        </label>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <p className="text-sm text-gray-500">
                        By completing your purchase, you agree to our <a href="#" className="text-black hover:underline">Terms of Service</a> and <a href="#" className="text-black hover:underline">Privacy Policy</a>.
                      </p>
                    </div>
                  </div>
                )}
                
                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  >
                    {step === 'information' ? 'Continue to shipping' : step === 'shipping' ? 'Continue to payment' : 'Complete order'}
                  </button>
                </div>
              </form>
            </div>
            
            <div className="mt-16 lg:mt-0 lg:col-span-5">
              <div className="bg-gray-50 rounded-lg px-6 py-8">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Order summary</h2>
                
                <div className="flow-root">
                  <ul className="-my-4 divide-y divide-gray-200">
                    {cartItems.map((item) => (
                      <li key={item.id} className="py-4 flex">
                        <div className="flex-shrink-0 w-16 h-16 border border-gray-200 rounded-md overflow-hidden">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="ml-4 flex-1 flex flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>{item.product.name}</h3>
                              <p className="ml-4">${(item.product.price * item.quantity).toFixed(2)}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              {item.color}, {item.size} × {item.quantity}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600">Subtotal</p>
                    <p className="text-gray-900 font-medium">${subtotal.toFixed(2)}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600">Shipping</p>
                    <p className="text-gray-900 font-medium">
                      {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600">Tax</p>
                    <p className="text-gray-900 font-medium">${tax.toFixed(2)}</p>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                    <p className="text-lg font-medium text-gray-900">Total</p>
                    <p className="text-xl font-bold text-gray-900">${total.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Checkout;