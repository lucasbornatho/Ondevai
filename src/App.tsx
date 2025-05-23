import '../src/estilo/estilo.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import NotFound from './pages/notfound'
import Eventos from './pages/eventos'
import Cadastro from './pages/cadastro'
import CadastroUsuario from './pages/cadastrousuario'
import RecuperaSenha from './pages/recuperasenha'
import EventoUnico from './pages/eventoUnico'
import Sobre from './pages/sobre'
import FiltroEvento from './pages/filtroEvento'


function App() {

  return (
      <Routes>
        
        <Route path='/' element= {<Home />} />
        <Route path='/eventos' element= {<Eventos />} />
        <Route path='/eventos/:id' element= {<EventoUnico />} />
        <Route path='/cadastroevento' element={<Cadastro/>}/>
        <Route path='/cadastrousuario' element={<CadastroUsuario />} />
        <Route path='/recuperarsenha' element={<RecuperaSenha />} />
        <Route path='/sobrenos' element={<Sobre/>}/>
        <Route path="/filtroevento" element={<FiltroEvento />} />
        <Route path='*' element= {<NotFound />} />
        
      </Routes>
  )
}

export default App
