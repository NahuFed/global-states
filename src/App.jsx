import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'

// NIVEL 1: App - Aquí manejamos TODOS los estados
function App() {
  // Estado del carrito de compras
  const [cartItems, setCartItems] = useState([])
  
  // Estado del usuario
  const [user, setUser] = useState({
    name: 'Juan Pérez',
    email: 'juan@email.com',
    budget: 1000
  })
  
  // Estado de productos disponibles
  const [products] = useState([
    { id: 1, name: 'Laptop', price: 800, stock: 5 },
    { id: 2, name: 'Mouse', price: 25, stock: 10 },
    { id: 3, name: 'Teclado', price: 60, stock: 8 },
    { id: 4, name: 'Monitor', price: 300, stock: 3 }
  ])
  
  // Estado para notificaciones
  const [notification, setNotification] = useState('')

  // Funciones que deben ser pasadas a través de múltiples niveles
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

  return (
    <div className="app">
      <h1>🛒 Tienda Online - Ejemplo de Prop Drilling</h1>
      <p className="description">
        Este ejemplo demuestra prop drilling extremo: el estado se maneja en App 
        y debe pasar por 4 niveles para llegar a los componentes hermanos que lo necesitan.
      </p>
      
      {notification && (
        <div className="notification">{notification}</div>
      )}
      
      {/* Pasamos TODAS las props necesarias al siguiente nivel */}
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
  )
}

export default App
