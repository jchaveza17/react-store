import Link from './Link'; 
import { useShoppingCart } from '../context/CartContext';

function ProductDisplay({ product }) {
    const { addToCart } = useShoppingCart();

    return (
        <div className="bg-black rounded-lg shadow-lg p-4 h-96 w-full flex flex-col justify-between m-2 select-none">
            <Link to={`/product/${product.id}`} className="flex flex-col justify-between flex-grow">
                <div className="flex justify-center bg-white">
                    <img className="h-40 w-40 object-contain place-content-center" src={product.image} alt={product.title} />
                </div>
                <h3 className="text-lg font-serif font-semibold text-center mt-4">{product.title}</h3>
                <p className="text-sm text-white self-start">${product.price}</p>
            </Link>

            
            <button 
                onClick={(e) => {
                    e.stopPropagation(); 
                    addToCart(product);
                }} 
                className='bg-white text-black mt-7 p-2 rounded hover:bg-gray-400 hover:text-white'>
                Add to Cart
            </button>
        </div>
    );
}

export default ProductDisplay;
