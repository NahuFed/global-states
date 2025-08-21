import ShoppingSection from './ShoppingSection'
import PropDrillingAnalysis from './PropDrillingAnalysis'

// NIVEL 2: Dashboard - Solo pasa las props sin usarlas realmente
function Dashboard({ 
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
    <div className="dashboard">
      <div className="user-info">
        <h2>👤 Bienvenido, {user.name}</h2>
        <p>Email: {user.email} | Presupuesto: ${user.budget}</p>
      </div>
      
      <div className="dashboard-stats">
        <p>📊 Productos en carrito: {cartItems.length}</p>
        <p>💰 Total: ${getTotalPrice()}</p>
      </div>

      <p className="level-indicator">
        📍 NIVEL 2: Dashboard - Pasando {Object.keys({
          user, cartItems, products, addToCart, removeFromCart, 
          updateQuantity, getTotalPrice, clearCart
        }).length} props al siguiente nivel
      </p>
      
      {/* Análisis visual del prop drilling */}
      <PropDrillingAnalysis 
        user={user}
        cartItems={cartItems}
        products={products}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        getTotalPrice={getTotalPrice}
        clearCart={clearCart}
      />
      
      {/* Pasamos TODAS las props al siguiente nivel */}
      <ShoppingSection 
        user={user}
        cartItems={cartItems}
        products={products}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        getTotalPrice={getTotalPrice}
        clearCart={clearCart}
      />
    </div>
  )
}

export default Dashboard
