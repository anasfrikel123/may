import React, { useState } from 'react';
import { products } from '../data';

interface CartItem {
  id: string;
  product: typeof products[0];
  quantity: number;
}

const initialCartItems: CartItem[] = [
  {
    id: '1',
    product: products[0],
    quantity: 1,
  },
  {
    id: '2',
    product: products[2],
    quantity: 2,
  },
];

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  return (
    <div>
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <span>{item.product.name}</span>
              <span>Quantity: {item.quantity}</span>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                min="1"
              />
            </li>
          ))}
        </ul>
      )}
      <h2>Total: ${calculateTotal().toFixed(2)}</h2>
    </div>
  );
};

export default Cart;