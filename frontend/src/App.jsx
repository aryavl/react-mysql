
import './App.css'
import { Routes,Route } from 'react-router-dom'
import SalesEntry from './components/SalesEntry'
function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<SalesEntry/>}/>
    </Routes>
    </>
  )
}

export default App
