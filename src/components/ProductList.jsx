// NIVEL 4A: ProductList - FINALMENTE usa algunas de las props
function ProductList({ products, addToCart, cartItems }) {
  return (
    <div className="product-list">
      <h4>📦 Lista de Productos</h4>
      <p className="level-indicator">
        📍 NIVEL 4A: ProductList - Componente hermano que usa: products, addToCart, cartItems
      </p>
      
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h5>{product.name}</h5>
            <p>${product.price}</p>
            <p>Stock: {product.stock}</p>
            <button 
              onClick={() => addToCart(product)}
              disabled={product.stock === 0}
              className="add-to-cart-btn"
            >
              {product.stock === 0 ? 'Sin stock' : '+ Agregar'}
            </button>
            <p className="in-cart">
              En carrito: {cartItems.find(item => item.id === product.id)?.quantity || 0}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
