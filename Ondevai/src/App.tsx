import './estilo.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import NotFound from './pages/notfound'
import Sobre from './pages/sobre'

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
