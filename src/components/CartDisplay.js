import { useShoppingCart } from "../context/CartContext";

function CartDisplay({ item }){
    const { removeFromCart } = useShoppingCart();

    return(
        <div className='m-5 border-2 border-gray-400 rounded p-6 flex select-none'>
            <div className='w-1/4'>
                <img className="w-40 h-50 object-contain select-none font-serif" src={item.image} alt={item.title} />
            </div>
            <div className='w-2/3 select-none'>
                <h1 className="text-2xl font-bold mt-4 w-1/3 font-serif">{item.title}</h1>
            </div>
            <div className="text-5xl">
                ${item.price}
                <button className="mt-7 bg-red-500 text-white rounded p-2 hover:bg-red-700 font-serif" onClick={() => removeFromCart(item.id)}>
                    Remove From Cart
                </button>
                <div className="text-5xl text-black font-serif mt-3">Quantity: ({item.quantity})</div>
            </div>
        </div>
    );
}

export default CartDisplay;