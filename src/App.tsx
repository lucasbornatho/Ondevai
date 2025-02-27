import '../src/estilo/estilo.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import NotFound from './pages/notfound'
import Eventos from './pages/eventos'
// import Sobre from './pages/sobre'

function App() {

  return (
    <Routes>
      <Route path='*' element= {<NotFound />} />
      <Route path='/' element= {<Home />} />
      {/* <Route path='/sobre' element= {<Sobre />} /> */}
      <Route path='/eventos' element= {<Eventos />} />
    </Routes>
  )
}

export default App
