import ShoppingSection from './ShoppingSection'
import PropDrillingAnalysis from './PropDrillingAnalysis'

// 🟠 NIVEL 2: Dashboard - Solo pasa las props sin usarlas realmente (PROBLEMA!)
// 
// 🔴 TODO: Después de refactorizar con useContext, este componente:
// - NO debería recibir ninguna prop
// - Puede usar hooks como useCart(), useUser() para mostrar stats
// - Se enfoca solo en layout y estructura
// 
// 💡 HINT: function Dashboard() { // Sin props!
//   const { cartItems } = useCart()
//   const { getTotalPrice } = useCart()
//   // ... resto igual
// }

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
        }).length} props al siguiente nivel ⚠️ PROBLEMA!
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
      
      {/* 🔴 PROBLEMA: Pasamos TODAS las props al siguiente nivel sin usarlas aquí */}
      {/* 🔴 TODO: Después de refactorizar, ShoppingSection no debería recibir props */}
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
