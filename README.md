# Ejemplo de Prop Drilling Extremo en React

Este proyecto demuestra el **prop drilling** extremo en React, donde el estado debe pasarse a través de múltiples niveles de componentes para llegar a los componentes que realmente lo necesitan.

## 🎯 Objetivo

Mostrar cómo el prop drilling puede volverse problemático y prepararar el terreno para demostrar cómo solucionarlo con **useContext** y estados globales.

## 📊 Estructura del Prop Drilling

### 4 Niveles de Componentes:

1. **NIVEL 1: App** 🔴
   - Maneja TODO el estado global
   - Estados: `cartItems`, `user`, `products`, `notification`
   - Funciones: `addToCart`, `removeFromCart`, `updateQuantity`, `getTotalPrice`, `clearCart`
   - **Pasa 8 props** al siguiente nivel

2. **NIVEL 2: Dashboard** 🟠
   - NO usa ninguna de las props directamente
   - Solo las pasa al siguiente nivel
   - **Pasa 8 props** al siguiente nivel

3. **NIVEL 3: ShoppingSection** 🟡
   - NO usa ninguna de las props directamente
   - Solo las pasa al siguiente nivel
   - **Pasa 8 props** divididas entre los componentes hermanos

4. **NIVEL 4A: ProductList** 🔵 (Componente hermano)
   - **FINALMENTE usa**: `products`, `addToCart`, `cartItems`
   - Necesita comunicarse con su hermano Cart

5. **NIVEL 4B: Cart** 🟢 (Componente hermano)
   - **FINALMENTE usa**: `cartItems`, `removeFromCart`, `updateQuantity`, `getTotalPrice`, `clearCart`, `user`
   - Necesita comunicarse con su hermano ProductList

## 🚨 Problemas del Prop Drilling

1. **Mantenimiento**: Cambiar una prop requiere modificar múltiples archivos
2. **Legibilidad**: Es difícil rastrear dónde se usan realmente las props
3. **Performance**: Componentes intermedios se re-renderizan innecesariamente
4. **Escalabilidad**: Agregar nuevos componentes es complicado
5. **Testing**: Es difícil testear componentes aisladamente

## 🎨 Visualización

Cada nivel tiene un color de borde diferente para visualizar la jerarquía:
- 🔴 **Nivel 1 (App)**: Rojo - Estado centralizado
- 🟠 **Nivel 2 (Dashboard)**: Naranja - Solo pasa props
- 🟡 **Nivel 3 (ShoppingSection)**: Amarillo - Solo pasa props
- 🔵 **Nivel 4A (ProductList)**: Azul - Usa props
- 🟢 **Nivel 4B (Cart)**: Verde - Usa props

## 🚀 Cómo ejecutar

```bash
npm install
npm run dev
```

## 📝 Funcionalidades

- ✅ Agregar productos al carrito
- ✅ Modificar cantidades en el carrito
- ✅ Eliminar productos del carrito
- ✅ Vaciar carrito completo
- ✅ Validación de presupuesto
- ✅ Notificaciones en tiempo real
- ✅ Estado compartido entre componentes hermanos

## 🔧 Próximos pasos

Este ejemplo servirá como base para demostrar cómo solucionar el prop drilling usando:

1. **React Context API** (useContext)
2. **Custom Hooks**
3. **Estado global**
4. **Providers y Consumers**

## 📁 Estructura de archivos

```
src/
├── App.jsx              # Nivel 1 - Maneja todo el estado
├── App.css              # Estilos con colores por nivel
└── components/
    ├── Dashboard.jsx    # Nivel 2 - Pasa props
    ├── ShoppingSection.jsx # Nivel 3 - Pasa props
    ├── ProductList.jsx  # Nivel 4A - Usa props
    └── Cart.jsx         # Nivel 4B - Usa props
```

## 🤔 Preguntas para reflexionar

1. ¿Qué pasaría si necesitáramos agregar un nuevo componente en el nivel 3?
2. ¿Cómo sería testear el componente `Cart` de forma aislada?
3. ¿Qué sucede si queremos agregar un nuevo estado?
4. ¿Cuántas props necesitaríamos pasar si tuviéramos 10 niveles de componentes?

---

**Este ejemplo exagera intencionalmente el prop drilling para fines educativos.**+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
