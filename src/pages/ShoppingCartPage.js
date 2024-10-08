import { useShoppingCart } from '../context/CartContext';
import CartDisplay from '../components/CartDisplay';

const ShoppingCartPage = () => {
    const { cartItems, clearCart } = useShoppingCart();

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const renderedCart = cartItems.map((item) => {
        return <CartDisplay key={item.id} item={item}></CartDisplay>
    });

    if (cartItems.length === 0) {
        return (
            <div>
                <h2 className='m-7 text-3xl select-none'>Your Cart: {cartItems.length}</h2>
                <p className='text-5xl m-7 select-none'>Your cart is empty.</p>
            </div>
        );
    }

    return (
        <div>
            <h2 className='m-7 text-3xl select-none'>Your Cart: {cartItems.length}</h2>
            <button onClick={() => clearCart()} className='text-4xl m-5 bg-red-500 text-white rounded p-2 hover:bg-red-700 font-serif'>
                Clear Cart
            </button>
            <div>
                {renderedCart}
            </div>
            <div className="flex justify-end mt-10 mr-7">
                <div className="text-3xl font-bold font-serif">
                    Total: ${totalPrice.toFixed(2)}
                </div>
            </div>
        </div>
    );
};

export default ShoppingCartPage;
