// Componente que muestra visualmente el prop drilling
function PropDrillingAnalysis({ 
  user, 
  cartItems, 
  products, 
  addToCart, 
  removeFromCart, 
  updateQuantity, 
  getTotalPrice, 
  clearCart 
}) {
  const totalProps = Object.keys({
    user, cartItems, products, addToCart, removeFromCart, 
    updateQuantity, getTotalPrice, clearCart
  }).length

  return (
    <div className="prop-drilling-analysis">
      <h3>🔍 Análisis del Prop Drilling</h3>
      
      <div className="drilling-stats">
        <div className="stat-item">
          <strong>Total de props pasadas:</strong> {totalProps}
        </div>
        <div className="stat-item">
          <strong>Niveles de profundidad:</strong> 4
        </div>
        <div className="stat-item">
          <strong>Componentes que solo pasan props:</strong> 2 (Dashboard y ShoppingSection)
        </div>
        <div className="stat-item">
          <strong>Props que viajan sin ser usadas:</strong> {totalProps} × 2 niveles = {totalProps * 2} transferencias innecesarias
        </div>
      </div>

      <div className="drilling-flow">
        <h4>🔄 Flujo de Props</h4>
        <div className="flow-item level-1">
          <span className="level-label">NIVEL 1 (App)</span>
          <span className="arrow">⬇️</span>
          <span className="props-count">{totalProps} props</span>
        </div>
        <div className="flow-item level-2">
          <span className="level-label">NIVEL 2 (Dashboard)</span>
          <span className="arrow">⬇️</span>
          <span className="props-count">{totalProps} props</span>
        </div>
        <div className="flow-item level-3">
          <span className="level-label">NIVEL 3 (ShoppingSection)</span>
          <div className="split-arrow">
            <span className="arrow">↙️</span>
            <span className="arrow">↘️</span>
          </div>
        </div>
        <div className="flow-siblings">
          <div className="flow-item level-4a">
            <span className="level-label">NIVEL 4A (ProductList)</span>
            <span className="props-used">Usa: 3 props</span>
          </div>
          <div className="flow-item level-4b">
            <span className="level-label">NIVEL 4B (Cart)</span>
            <span className="props-used">Usa: 6 props</span>
          </div>
        </div>
      </div>

      <div className="problems-list">
        <h4>⚠️ Problemas identificados:</h4>
        <ul>
          <li>🔧 <strong>Mantenimiento difícil:</strong> Cambiar una prop requiere tocar {totalProps > 0 ? '3' : '0'} archivos</li>
          <li>📊 <strong>Re-renders innecesarios:</strong> Dashboard y ShoppingSection se re-renderizan sin usar las props</li>
          <li>🧪 <strong>Testing complejo:</strong> No se puede testear ProductList o Cart de forma aislada</li>
          <li>📈 <strong>Escalabilidad limitada:</strong> Agregar un nivel más multiplicaría el problema</li>
        </ul>
      </div>

      <div className="solution-preview">
        <h4>💡 Solución con useContext:</h4>
        <p>Con React Context API, cada componente podría acceder directamente al estado sin prop drilling:</p>
        <code className="solution-code">
          const cartContext = useContext(CartContext)<br/>
          const userContext = useContext(UserContext)
        </code>
      </div>
    </div>
  )
}

export default PropDrillingAnalysis
