import { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import useDebounce from '../hooks/useDebounce'; 
import { useCategory } from '../context/CategoryContext';
import Filter from '../components/Filter';

function StorePage({ products }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const debouncedSearchTerm = useDebounce(searchTerm, 600); 
  const { selectedCategory } = useCategory();

  useEffect(() => {
    let filtered = products;

    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (debouncedSearchTerm) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [debouncedSearchTerm, selectedCategory, products]);
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="">
      <div className='m-7'>
        <SearchBar onSearch={handleSearch} />
      </div>
  
      <div className="flex mx-5 space-x-8">
        <div className="w-3/4">
          <ProductList products={filteredProducts} />
        </div>
        <div className="w-1/4 mt-2">
          <Filter />
        </div>
      </div>
    </div>
  );
}

export default StorePage;
