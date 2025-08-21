// 🟢 NIVEL 4B: Cart - El otro componente hermano que usa las props restantes
//
// 🔴 TODO: Refactorizar este componente para usar useContext:
//
// 💡 HINT: function Cart() { // Sin props!
//   const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart()
//   const { user } = useUser()
//   // ... resto igual
// }
//
// ✅ RESULTADO: El componente se vuelve independiente de la jerarquía
// ✅ BENEFICIO: Se puede testear de forma aislada
// ✅ BENEFICIO: Se puede mover a cualquier lugar sin problemas

function Cart({ cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart, user }) {
  return (
    <div className="cart">
      <h4>🛒 Carrito de Compras</h4>
      <p className="level-indicator">
        📍 NIVEL 4B: Cart - Componente hermano que FINALMENTE usa: cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart, user ✅
      </p>
      <div className="refactor-hint">
        <small>
          💡 <strong>TU TAREA:</strong> Elimina las props y usa useCart() + useUser()
        </small>
      </div>
      
      {cartItems.length === 0 ? (
        <p className="empty-cart">Tu carrito está vacío</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <span>{item.name}</span>
                <div className="quantity-controls">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
                <span>${item.price * item.quantity}</span>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h5>Total: ${getTotalPrice()}</h5>
            <p>Presupuesto restante: ${user.budget - getTotalPrice()}</p>
            <div className="cart-actions">
              <button 
                onClick={clearCart}
                className="clear-cart-btn"
              >
                Vaciar Carrito
              </button>
              <button 
                disabled={getTotalPrice() > user.budget}
                className="checkout-btn"
              >
                {getTotalPrice() > user.budget ? 'Presupuesto insuficiente' : 'Proceder al pago'}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
