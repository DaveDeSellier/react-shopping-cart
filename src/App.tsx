import { Routes, Route } from 'react-router-dom'
import Products from './pages/Products'
import Checkout from './pages/Checkout'
import { ShoppingContextProvider } from './context/ShoppingContextProvider'

function App() {
  
  return (
    <div className="">
      <ShoppingContextProvider>
      <main>
          <Routes>
            <Route index element = {<Products />} />
            <Route path="/" element={<Products />}/>
            <Route path="/checkout" element={<Checkout />}/>
          </Routes>
      </main>
      </ShoppingContextProvider>
    </div>
  )
}

export default App
