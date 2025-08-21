// 🎯 AppProviders - Componente que centraliza todos los Providers
// 
// Este componente mantiene App.jsx limpio al encapsular todos los Context Providers
// en un solo lugar. Es una práctica recomendada para mejor organización del código.
//
// 💡 HINT: Después de crear tus contexts, este archivo debería verse así:
// 
// import { CartProvider } from './contexts/CartContext'
// import { UserProvider } from './contexts/UserContext'
// import { ProductsProvider } from './contexts/ProductsContext'
// import { NotificationProvider } from './contexts/NotificationContext'
//
// function AppProviders({ children }) {
//   return (
//     <CartProvider>
//       <UserProvider>
//         <ProductsProvider>
//           <NotificationProvider>
//             {children}
//           </NotificationProvider>
//         </ProductsProvider>
//       </UserProvider>
//     </CartProvider>
//   )
// }

function AppProviders({ children }) {
  // 🔴 TODO: Importar y usar todos tus Context Providers aquí
  // 🔴 TODO: Este componente debería envolver children con todos los providers
  
  // Por ahora retorna children sin providers (hasta que crees los contexts)
  return children
}

export default AppProviders
