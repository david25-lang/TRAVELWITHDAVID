import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const WishlistContext = createContext(null);
const STORAGE_KEY = 'davis-gee-wishlist-v1';

export const WishlistProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch {
        setItems([]);
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const toggleItem = (item) => {
    setItems((current) => {
      const exists = current.some((entry) => entry.slug === item.slug && entry.type === item.type);
      if (exists) {
        return current.filter((entry) => !(entry.slug === item.slug && entry.type === item.type));
      }

      return [...current, item];
    });
  };

  const removeItem = (slug, type) => {
    setItems((current) => current.filter((entry) => !(entry.slug === slug && entry.type === type)));
  };

  const clearWishlist = () => setItems([]);

  const isSaved = (slug, type) => items.some((entry) => entry.slug === slug && entry.type === type);

  const value = useMemo(
    () => ({ items, toggleItem, removeItem, clearWishlist, isSaved }),
    [items],
  );

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }

  return context;
};
