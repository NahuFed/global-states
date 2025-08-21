// 🔵 NIVEL 4A: ProductList - FINALMENTE usa algunas de las props
//
// 🔴 TODO: Refactorizar este componente para usar useContext:
// 
// 💡 HINT: function ProductList() { // Sin props!
//   const { products } = useProducts()
//   const { cartItems, addToCart } = useCart()
//   // ... resto igual
// }
//
// ✅ RESULTADO: El componente se vuelve independiente de la jerarquía
// ✅ BENEFICIO: Se puede testear de forma aislada
// ✅ BENEFICIO: Se puede mover a cualquier lugar sin problemas

function ProductList({ products, addToCart, cartItems }) {
  return (
    <div className="product-list">
      <h4>📦 Lista de Productos</h4>
      <p className="level-indicator">
        📍 NIVEL 4A: ProductList - Componente hermano que FINALMENTE usa: products, addToCart, cartItems ✅
      </p>
      <div className="refactor-hint">
        <small>
          💡 <strong>TU TAREA:</strong> Elimina las props y usa useProducts() + useCart()
        </small>
      </div>
      
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
