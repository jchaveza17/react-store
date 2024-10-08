import Route from "./components/Route";
import NavigationBar from "./components/NavigationBar";
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ShoppingCartPage from "./pages/ShoppingCartPage";
import StorePage from './pages/StorePage'
import ProductPage from './pages/ProductPage'
import { fetchProducts } from './fetching/FetchProducts';
import { useState, useEffect } from "react";
import { CategoryProvider } from "./context/CategoryContext";
import { ShoppingCartProvider } from "./context/CartContext";


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const productData = await fetchProducts();
      setProducts(productData);
    };

    loadProducts();
  }, []);



  return (
    <ShoppingCartProvider>
      <NavigationBar />
      <div>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path='/store'>
          <CategoryProvider products={products}>
            <StorePage products={products}/>
          </CategoryProvider>
        </Route>
        <Route path='/cart'>
          <ShoppingCartPage />
        </Route>
        <Route path="/product/:id">
          <ProductPage products={products} /> 
        </Route>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;