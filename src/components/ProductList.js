import ProductDisplay from '../components/ProductDisplay';

function ProductList ({products}) {
    const renderedProducts = products.map((product) => {
        return (
            <ProductDisplay key={product.id} product={product}>
            </ProductDisplay>
        );
    })

    return(
        <div className="grid grid-cols-4 gap-2 select-none">
            {renderedProducts}
        </div>
    );
}

export default ProductList;