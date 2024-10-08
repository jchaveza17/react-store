import Link from './Link';
import { useShoppingCart } from '../context/CartContext';

function NavigationBar() {
    const { cartItems } = useShoppingCart();

    const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

    const links = [
        {name: 'Home', path: '/'},
        {name: 'Store', path: '/store'},
        {name: 'Cart', path: '/cart'},
    ];

    const renderedLinks = links.map((link) => {
        return (
            <Link
                activeClassName="font-bold pl-2 underline"
                className="mb-3 hover:animate-bounce flex items-center"
                key={link.name}
                to={link.path}
            >
                {link.name}
                {link.name === 'Cart' && totalItemsInCart > 0 && (
                    <span className="ml-2 text-white no-underline">
                        ({totalItemsInCart})
                    </span>
                )}
            </Link>
        );
    });
    
    return (
        <div className="py-7 flex justify-between items-center bg-black gap-4 select-none font-serif">
            <Link to="/" className="text-2xl font-bold pl-4">
                React Store
            </Link>
            <div className="flex justify-center gap-8 pr-20">
                {renderedLinks}
            </div>
        </div>
    );
}

export default NavigationBar;



