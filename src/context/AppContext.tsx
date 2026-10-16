import React, { createContext, useContext, useEffect, useState } from 'react';
import { CartItem, Product, WeightOption } from '../types';

interface AppContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  cart: CartItem[];
  addToCart: (product: Product, option: WeightOption, quantity?: number) => void;
  removeFromCart: (productId: string, optionLabel: string) => void;
  updateQuantity: (productId: string, optionLabel: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  selectedProductForModal: Product | null;
  setSelectedProductForModal: (product: Product | null) => void;
  cartTotalCount: number;
  cartTotalINR: number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Theme state: defaults to light design as requested by user ("make this website 100x aesthetic with light design...also above it should have a dark mode switch which shifts to dark mode with more aesthetic designs")
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('kashmir_arova_theme');
    if (saved) return saved === 'dark';
    return false;
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('kashmir_arova_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('kashmir_arova_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('kashmir_arova_theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    try {
      localStorage.setItem('kashmir_arova_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const addToCart = (product: Product, option: WeightOption, quantity = 1) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.productId === product.id && item.selectedOption.label === option.label
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      }

      return [
        ...prev,
        {
          productId: product.id,
          productName: product.name,
          productImage: product.image,
          selectedOption: option,
          quantity
        }
      ];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, optionLabel: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.productId === productId && item.selectedOption.label === optionLabel)
      )
    );
  };

  const updateQuantity = (productId: string, optionLabel: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, optionLabel);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.productId === productId && item.selectedOption.label === optionLabel
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotalINR = cart.reduce(
    (acc, item) => acc + item.selectedOption.priceINR * item.quantity,
    0
  );

  return (
    <AppContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        selectedProductForModal,
        setSelectedProductForModal,
        cartTotalCount,
        cartTotalINR
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useApp(): AppContextType {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
