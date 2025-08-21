# 🎯 Trabajo Práctico: Resolviendo Prop Drilling con useContext

Este trabajo práctico te desafía a **refactorizar** una aplicación React que sufre de **prop drilling extremo*## 🔧 Estructura Sugerida Final

```
src/
├── contexts/
│   ├── CartContext.jsx
│   ├── UserContext.jsx
│   ├── ProductsContext.jsx
│   └── NotificationContext.jsx
├── hooks/
│   ├── useCart.js
│   ├── useUser.js
│   ├── useProducts.js
│   └── useNotification.js
├── components/
│   ├── AppProviders.jsx     # 🆕 Centraliza todos los providers
│   ├── Dashboard.jsx        # Sin props!
│   ├── ShoppingSection.jsx  # Sin props!
│   ├── ProductList.jsx      # Usa hooks!
│   └── Cart.jsx             # Usa hooks!
└── App.jsx                  # Limpio, solo usa AppProvidersna aplicación que use **React Context API** para el manejo de estados globales.

## 📋 Situación Actual (El Problema)

La aplicación funciona perfectamente, pero tiene un serio problema de arquitectura: **prop drilling extremo**. El estado se maneja en el componente `App` y debe pasar por 4 niveles para llegar a los componentes que realmente lo necesitan.

### 🔍 Análisis del Problema Actual:

- **8 props** se pasan a través de múltiples niveles
- **2 componentes intermedios** (Dashboard y ShoppingSection) que solo pasan props sin usarlas
- **Componentes hermanos** (ProductList y Cart) que necesitan compartir estado
- **Mantenimiento difícil**: cambiar una prop requiere tocar múltiples archivos
- **Testing complicado**: no se pueden testear componentes de forma aislada

## 🎯 Tu Misión

Refactorizar la aplicación para eliminar el prop drilling usando **React Context API** y **useContext Hook**.

### ✅ Objetivos de Aprendizaje

Al completar este trabajo práctico, habrás aprendido a:

1. ✅ Identificar problemas de prop drilling en aplicaciones React
2. ✅ Crear y configurar React Contexts
3. ✅ Usar el hook `useContext` para acceder al estado global
4. ✅ Implementar Custom Hooks para lógica de estado
5. ✅ Separar concerns entre UI y lógica de estado
6. ✅ Mejorar la arquitectura y mantenibilidad del código

## 🚀 Instrucciones de Inicio

```bash
# Clonar o descargar el proyecto
git clone [url-del-repo]
cd global-states

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

## 📝 Tareas a Completar

### � Tarea 1: Crear los Contexts
**Hint**: Necesitarás crear contexts separados para diferentes tipos de estado.

<details>
<summary>💡 Pistas para la Tarea 1</summary>

- Crea un `CartContext` para el estado del carrito
- Crea un `UserContext` para el estado del usuario  
- Crea un `ProductsContext` para los productos disponibles
- Considera crear un `NotificationContext` para las notificaciones
- Usa `createContext()` de React
- No olvides exportar los contexts

</details>

---

### 🟠 Tarea 2: Implementar los Providers
**Hint**: Los providers deben envolver los componentes que necesitan acceso al estado.

<details>
<summary>💡 Pistas para la Tarea 2</summary>

- Crea componentes Provider para cada context
- Mueve la lógica de estado desde `App.jsx` a los providers
- Los providers deben contener tanto el estado como las funciones que lo modifican
- **✨ PATRÓN RECOMENDADO**: Crea un componente `AppProviders.jsx` para mantener App.jsx limpio
- Ejemplo: `<AppProviders><Dashboard /></AppProviders>`
- Usa el patrón `value={{ state, actions }}`

</details>

---

### 🟡 Tarea 3: Crear Custom Hooks
**Hint**: Los custom hooks simplifican el uso de los contexts.

<details>
<summary>💡 Pistas para la Tarea 3</summary>

- Crea `useCart()`, `useUser()`, `useProducts()`, etc.
- Los custom hooks deben usar `useContext()` internamente
- Agrega validación: lanza error si se usan fuera del Provider
- Ejemplo: `const { cartItems, addToCart } = useCart()`
- Esto hace el código más limpio y fácil de usar

</details>

---

### � Tarea 4: Refactorizar ProductList
**Hint**: Este componente debe acceder directamente al estado sin props.

<details>
<summary>💡 Pistas para la Tarea 4</summary>

- Elimina las props relacionadas con productos y carrito
- Usa `useProducts()` y `useCart()` directamente
- El componente ya no depende de props pasadas desde arriba
- Debería funcionar exactamente igual que antes

</details>

---

### 🟢 Tarea 5: Refactorizar Cart
**Hint**: Similar a ProductList, debe usar hooks en lugar de props.

<details>
<summary>💡 Pistas para la Tarea 5</summary>

- Elimina todas las props relacionadas con el carrito y usuario
- Usa `useCart()`, `useUser()`, y posiblemente `useNotification()`
- El componente se vuelve independiente de la jerarquía
- Mantén toda la funcionalidad existente

</details>

---

### 🟣 Tarea 6: Limpiar Componentes Intermedios
**Hint**: Dashboard y ShoppingSection ya no necesitan pasar props.

<details>
<summary>� Pistas para la Tarea 6</summary>

- Elimina todas las props de `Dashboard` y `ShoppingSection`
- Estos componentes pueden mostrar información usando los contexts directamente
- O simplemente enfocarse en la estructura y layout
- Mucho más simples y limpios

</details>

---

### ⚪ Tarea 7: Actualizar App.jsx
**Hint**: App.jsx se convierte en el orquestador de providers.

<details>
<summary>💡 Pistas para la Tarea 7</summary>

- Mueve toda la lógica de estado a los providers
- App.jsx solo debe contener la estructura JSX y los providers
- Posiblemente use algún context para notificaciones
- Mucho más limpio y enfocado

</details>

## 🏆 Criterios de Evaluación

### ⭐ Básico (6-7)
- [ ] Eliminar prop drilling básico
- [ ] Crear al menos un context funcional
- [ ] Usar useContext en los componentes finales

### ⭐⭐ Bueno (7-8)
- [ ] Crear múltiples contexts organizados
- [ ] Implementar custom hooks
- [ ] Refactorizar todos los componentes
- [ ] Mantener funcionalidad completa

### ⭐⭐⭐ Excelente (8-10)
- [ ] Arquitectura limpia y bien organizada
- [ ] Custom hooks con validación de errores
- [ ] Separación clara de responsabilidades
- [ ] Código reutilizable y mantenible
- [ ] Documentación del nuevo código

## � Estructura Sugerida Final

```
src/
├── contexts/
│   ├── CartContext.jsx
│   ├── UserContext.jsx
│   ├── ProductsContext.jsx
│   └── NotificationContext.jsx
├── hooks/
│   ├── useCart.js
│   ├── useUser.js
│   ├── useProducts.js
│   └── useNotification.js
├── components/
│   ├── Dashboard.jsx      # Sin props!
│   ├── ShoppingSection.jsx # Sin props!
│   ├── ProductList.jsx    # Usa hooks!
│   └── Cart.jsx           # Usa hooks!
└── App.jsx                # Solo providers y estructura
```

## 🚫 Restricciones

- ❌ **NO** uses Redux, Zustand u otras librerías de estado
- ❌ **NO** cambies la funcionalidad existente
- ❌ **NO** modifiques los estilos CSS
- ✅ **SÍ** usa solo React Context API y useContext
- ✅ **SÍ** mantén toda la funcionalidad actual
- ✅ **SÍ** mejora la arquitectura del código

## 📚 Recursos Útiles

- [React Context API Documentation](https://react.dev/reference/react/useContext)
- [Patterns for React Context](https://kentcdodds.com/blog/how-to-use-react-context-effectively)
- [Custom Hooks Guide](https://react.dev/learn/reusing-logic-with-custom-hooks)

## 🎉 Entrega

1. Haz commits frecuentes mostrando tu progreso
2. El commit final debe tener el mensaje: `"feat: Refactor prop drilling to use React Context API"`
3. La aplicación debe funcionar exactamente igual que antes
4. Pero ahora sin prop drilling! 🚀

---

**¡Buena suerte! Este ejercicio te ayudará a dominar uno de los patrones más importantes en React.** 💪+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
