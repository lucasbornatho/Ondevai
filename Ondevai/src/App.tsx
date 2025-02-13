import './estilo.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Sobre from './pages/sobre'
import NotFound from './pages/notfound'

function App() {

  return (
    <Routes>
      <Route path='*' element= {<NotFound />} />
      <Route path='/' element= {<Home />} />
      <Route path='/sobre' element= {<Sobre />} />
    </Routes>
  )
}

export default App
