import ProductList from './ProductList'
import Cart from './Cart'

// NIVEL 3: ShoppingSection - Tampoco usa las props, solo las pasa
function ShoppingSection({ 
  user,
  cartItems, 
  products, 
  addToCart, 
  removeFromCart, 
  updateQuantity, 
  getTotalPrice, 
  clearCart 
}) {
  return (
    <div className="shopping-section">
      <h3>🏪 Sección de Compras</h3>
      
      <p className="level-indicator">
        📍 NIVEL 3: ShoppingSection - Pasando {Object.keys({
          user, cartItems, products, addToCart, removeFromCart, 
          updateQuantity, getTotalPrice, clearCart
        }).length} props al nivel final
      </p>
      
      <div className="shopping-container">
        {/* Finalmente llegamos a los componentes hermanos que SÍ necesitan el estado */}
        <ProductList 
          products={products}
          addToCart={addToCart}
          cartItems={cartItems}
        />
        
        <Cart 
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          getTotalPrice={getTotalPrice}
          clearCart={clearCart}
          user={user}
        />
      </div>
    </div>
  )
}

export default ShoppingSection
