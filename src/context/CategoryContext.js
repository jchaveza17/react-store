import React, { createContext, useContext, useState } from 'react';

const CategoryContext = createContext();

export const CategoryProvider = ({ children, products }) => {
  const categories = [...new Set(products.map(product => product.category))]; 
  const [selectedCategory, setSelectedCategory] = useState('');

  const filterByCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <CategoryContext.Provider value={{ categories, selectedCategory, filterByCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  return useContext(CategoryContext);
};
