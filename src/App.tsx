import '../src/estilo/estilo.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import NotFound from './pages/notfound'
import Eventos from './pages/eventos'
import Cadastro from './pages/cadastro'
import CadastroUsuario from './pages/cadastrousuario'
import RecuperaSenha from './pages/recuperasenha'
import Test from './pages/test'
import { UsuarioLogadoProvider } from './contexts/contextAuth'
import EventoUnico from './pages/eventoUnico'
import Sobre from './pages/sobre'


function App() {

  return (
    <UsuarioLogadoProvider>
      <Routes>
        <Route path='*' element= {<NotFound />} />
        <Route path='/' element= {<Home />} />
        <Route path='/eventos' element= {<Eventos />} />
        <Route path='/eventos/:id' element= {<EventoUnico />} />
        <Route path='/cadastroevento' element={<Cadastro/>}/>
        <Route path='/cadastrousuario' element={<CadastroUsuario />} />
        <Route path='/recuperarsenha' element={<RecuperaSenha />} />
        <Route path='/sobrenos' element={<Sobre/>}/>
      </Routes>
    </UsuarioLogadoProvider>
  )
}

export default App
