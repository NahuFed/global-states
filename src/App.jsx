import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import AppProviders from './components/AppProviders'

// 🎯 TRABAJO PRÁCTICO: REFACTORIZAR PROP DRILLING CON useContext
// 
// Tu misión: Eliminar todo el prop drilling de esta aplicación
// usando React Context API y useContext Hook
//
// 📋 ESTADO ACTUAL: Todo el estado está aquí y se pasa por 4 niveles
// 🎯 ESTADO OBJETIVO: Los componentes acceden directamente al estado via Context
//
// 💡 HINT: Necesitarás crear contexts para:
// - CartContext (carrito)
// - UserContext (usuario)
// - ProductsContext (productos)
// - NotificationContext (notificaciones)
//
// 🎨 ORGANIZACIÓN LIMPIA: Usamos AppProviders para mantener App.jsx limpio

// NIVEL 1: App - Aquí manejamos TODOS los estados (PROBLEMA!)
function App() {
  // 🔴 TODO: Mover este estado a CartContext/CartProvider
  const [cartItems, setCartItems] = useState([])
  
  // 🔴 TODO: Mover este estado a UserContext/UserProvider
  const [user, setUser] = useState({
    name: 'Juan Pérez',
    email: 'juan@email.com',
    budget: 1000
  })
  
  // 🔴 TODO: Mover este estado a ProductsContext/ProductsProvider
  const [products] = useState([
    { id: 1, name: 'Laptop', price: 800, stock: 5 },
    { id: 2, name: 'Mouse', price: 25, stock: 10 },
    { id: 3, name: 'Teclado', price: 60, stock: 8 },
    { id: 4, name: 'Monitor', price: 300, stock: 3 }
  ])
  
  // 🔴 TODO: Mover este estado a NotificationContext/NotificationProvider
  const [notification, setNotification] = useState('')

  // 🔴 TODO: Mover estas funciones a CartContext/CartProvider
  // Funciones que deben ser pasadas a través de múltiples niveles (PROBLEMA!)
  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id)
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
    setNotification(`${product.name} agregado al carrito!`)
    setTimeout(() => setNotification(''), 3000)
  }

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId))
    setNotification('Producto eliminado del carrito')
    setTimeout(() => setNotification(''), 3000)
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity === 0) {
      removeFromCart(productId)
      return
    }
    setCartItems(cartItems.map(item => 
      item.id === productId ? { ...item, quantity } : item
    ))
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const clearCart = () => {
    setCartItems([])
    setNotification('Carrito vaciado')
    setTimeout(() => setNotification(''), 3000)
  }

  // 🔴 TODO: Después de crear los Providers, esta función debería verse así:
  // return (
  //   <AppProviders>
  //     <div className="app">
  //       {/* Contenido sin props! */}
  //       <h1>🛒 Tienda Online - Trabajo Práctico useContext</h1>
  //       <div className="work-instructions">...</div>
  //       <Dashboard /> {/* Sin props! */}
  //     </div>
  //   </AppProviders>
  // )

  return (
    <AppProviders>
      <div className="app">
        <h1>🛒 Tienda Online - Trabajo Práctico useContext</h1>
        <div className="work-instructions">
          <h2>🎯 Tu Misión: Eliminar el Prop Drilling</h2>
          <p>
            <strong>ESTADO ACTUAL:</strong> Esta aplicación funciona, pero sufre de prop drilling extremo. 
            8 props se pasan a través de 4 niveles de componentes.
          </p>
          <p>
            <strong>TU OBJETIVO:</strong> Refactorizar usando React Context API para que los componentes 
            accedan directamente al estado sin prop drilling.
          </p>
          <div className="drilling-problem">
            <code>App → Dashboard → ShoppingSection → ProductList/Cart</code>
            <br/>
            <small>↑ 8 props viajando por 4 niveles (PROBLEMA)</small>
          </div>
          <div className="clean-organization">
            <p>
              <strong>✨ ORGANIZACIÓN LIMPIA:</strong> Nota cómo usamos <code>AppProviders</code> 
              para mantener App.jsx limpio y organizado.
            </p>
          </div>
        </div>
        
        {notification && (
          <div className="notification">{notification}</div>
        )}
        
        {/* 🔴 PROBLEMA: Pasamos TODAS estas props a través de múltiples niveles */}
        {/* 🔴 TODO: Después de refactorizar, Dashboard no debería recibir props */}
        <Dashboard 
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
    </AppProviders>
  )
}

export default App
