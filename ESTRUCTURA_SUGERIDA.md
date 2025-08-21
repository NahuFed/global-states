# 📁 Estructura de Carpetas Sugerida

Cuando termines de refactorizar, tu proyecto debería verse así:

```
src/
├── contexts/                    # 🆕 Carpeta para todos los contexts
│   ├── CartContext.jsx         # Context para el carrito
│   ├── UserContext.jsx         # Context para el usuario
│   ├── ProductsContext.jsx     # Context para productos
│   └── NotificationContext.jsx # Context para notificaciones
├── hooks/                      # 🆕 Carpeta para custom hooks
│   ├── useCart.js              # Hook para usar CartContext
│   ├── useUser.js              # Hook para usar UserContext
│   ├── useProducts.js          # Hook para usar ProductsContext
│   └── useNotification.js      # Hook para usar NotificationContext
├── components/                 # Componentes existentes (refactorizados)
│   ├── AppProviders.jsx        # 🆕 Componente que centraliza providers
│   ├── Dashboard.jsx           # Sin props, usa hooks
│   ├── ShoppingSection.jsx     # Sin props, solo layout
│   ├── ProductList.jsx         # Sin props, usa hooks
│   ├── Cart.jsx               # Sin props, usa hooks
│   └── PropDrillingAnalysis.jsx # Mantener para mostrar la mejora
├── App.jsx                     # Limpio, solo usa AppProviders
├── App.css                     # Estilos existentes
└── main.jsx                    # Sin cambios
```

## 🎯 Ejemplo de implementación:

### 1. CartContext.jsx
```jsx
import { createContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  
  const addToCart = (product) => {
    // Lógica existente...
  }
  
  // ... más funciones
  
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    // ... más funciones
  }
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
```

### 2. useCart.js
```jsx
import { useContext } from 'react'
import CartContext from '../contexts/CartContext'

export function useCart() {
  const context = useContext(CartContext)
  
  if (!context) {
    throw new Error('useCart debe usarse dentro de CartProvider')
  }
  
  return context
}
```

### 3. AppProviders.jsx (🆕 PATRÓN RECOMENDADO)
```jsx
import { CartProvider } from '../contexts/CartContext'
import { UserProvider } from '../contexts/UserContext'
import { ProductsProvider } from '../contexts/ProductsContext'
import { NotificationProvider } from '../contexts/NotificationContext'

function AppProviders({ children }) {
  return (
    <CartProvider>
      <UserProvider>
        <ProductsProvider>
          <NotificationProvider>
            {children}
          </NotificationProvider>
        </ProductsProvider>
      </UserProvider>
    </CartProvider>
  )
}

export default AppProviders
```

### 4. App.jsx refactorizado (LIMPIO)
```jsx
import AppProviders from './components/AppProviders'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {
  return (
    <AppProviders>
      <div className="app">
        <h1>🛒 Tienda Online</h1>
        <Dashboard /> {/* Sin props! */}
      </div>
    </AppProviders>
  )
}
```

### 5. ProductList.jsx refactorizado
```jsx
import { useProducts } from '../hooks/useProducts'
import { useCart } from '../hooks/useCart'

function ProductList() { // Sin props!
  const { products } = useProducts()
  const { cartItems, addToCart } = useCart()
  
  // Resto del código igual...
}
```

¡Sigue este patrón para todos los componentes!
