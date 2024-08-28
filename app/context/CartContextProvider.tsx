"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define the CartItem interface
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// Define the CartContextProps interface
interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  updateCartItem: (id: number, quantity: number) => void;
  removeCartItem: (id: number) => void;
  clearCart: () => void;
}

// Create the CartContext
export const CartContext = createContext<CartContextProps | undefined>(undefined);

// CartProvider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  const addToCart = (newItem: CartItem) => {
    if (newItem.quantity <= 0) return; // Prevent adding items with quantity <= 0

    setCartItems(prev => {
      const existingItemIndex = prev.findIndex(item => item.id === newItem.id);
      if (existingItemIndex > -1) {
        const updatedItems = [...prev];
        updatedItems[existingItemIndex].quantity += newItem.quantity;
        return updatedItems;
      }
      return [...prev, newItem];
    });
  };

  const updateCartItem = (id: number, quantity: number) => {
    setCartItems(prev => {
      if (quantity <= 0) {
        // Remove item if the updated quantity is less than or equal to 0
        return prev.filter(item => item.id !== id);
      }
      return prev.map(item => item.id === id ? { ...item, quantity } : item);
    });
  };

  const removeCartItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateCartItem, removeCartItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Export the context
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCartContext must be used within a CartProvider');
  return context;
};
