import { createContext, useContext, useState, useEffect } from 'react';

const ShoppingCartContext = createContext();

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const storedCart = localStorage.getItem('cartItems');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const itemExists = prevItems.find(item => item.id === product.id);
            if (itemExists) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cartItems');
    };

    return (
        <ShoppingCartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};



