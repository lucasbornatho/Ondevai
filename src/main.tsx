import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UsuarioLogadoProvider } from './contexts/contextAuth.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UsuarioLogadoProvider>
    <BrowserRouter >
      <App />
    </BrowserRouter>
    </UsuarioLogadoProvider>
  </StrictMode>,
)
