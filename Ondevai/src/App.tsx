import './estilo.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home'
import NotFound from './components/notfound'
import Sobre from './components/sobre'

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
