import useNavigation from '../hooks/useNavigation';
import { useShoppingCart } from '../context/CartContext';

function ProductPage({ products }) {
    const { getParams } = useNavigation();
    const { id } = getParams('/product/:id'); 
    const { addToCart } = useShoppingCart();

    const product = products.find((item) => item.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="m-5 border-2 border-gray-400 rounded p-6 flex select-none">
            <div className='w-1/4'>
                <img className="w-96 h-auto object-contain select-none" src={product.image} alt={product.title} />
            </div>
            <div className='w-2/3 select-none'>
                <h1 className="text-2xl font-bold mt-4 w-1/3">{product.title}</h1>
                <p className="mt-4 w-1/5 font-semibold">Description: {product.description}</p>
            </div>
            <div>
                <p className='w-1/2'>${product.price}</p>
                <button onClick={() => addToCart(product)} className='bg-black text-white mt-7 p-2 rounded hover:bg-gray-400 hover:text-white'>
                    Add To Cart
                </button>
            </div>
        </div>
    );
}


export default ProductPage;