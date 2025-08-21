import ProductList from './ProductList'
import Cart from './Cart'

// 🟡 NIVEL 3: ShoppingSection - Tampoco usa las props, solo las pasa (PROBLEMA!)
//
// 🔴 TODO: Después de refactorizar con useContext, este componente:
// - NO debería recibir ninguna prop
// - Se enfoca solo en layout (la estructura de dos columnas)
// - Los componentes hijos acceden directamente al estado
//
// 💡 HINT: function ShoppingSection() { // Sin props!
//   return (
//     <div className="shopping-section">
//       <h3>🏪 Sección de Compras</h3>
//       <div className="shopping-container">
//         <ProductList /> {/* Sin props! */}
//         <Cart />        {/* Sin props! */}
//       </div>
//     </div>
//   )
// }

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
        }).length} props al nivel final ⚠️ PROBLEMA!
      </p>
      
      <div className="shopping-container">
        {/* 🔴 PROBLEMA: Finalmente llegamos a los componentes hermanos que SÍ necesitan el estado */}
        {/* 🔴 TODO: Después de refactorizar, estos componentes usarán hooks directamente */}
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
