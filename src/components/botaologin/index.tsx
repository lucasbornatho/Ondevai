import { useState } from 'react';
import { Link } from "react-router-dom"

function BotaoLogin() {
  const [LoginVisivel, setLoginVisivel] = useState(false);

  const abrirLogin = () => {
    setLoginVisivel(!LoginVisivel);
  }

  return (
        <div className="botaologin-container">
          <button onClick={abrirLogin} className="botaologin" >
          <img className='imagembotaologin' src="Icone Login.png" alt="" />
          </button>
            
          {LoginVisivel && (
            <div className="botaologin-form">
              <h1>Bem Vindo ao Onde Vai</h1>
              <img className='fotologin' src="Icone Login.png" alt="login" />
              <form>
                <div className="botaologin-form-div1">
                  <input className="botaologin-form-input" type="text" placeholder="Login"/>
                </div>

                <div className="botaologin-form-div1">
                  <input className="botaologin-form-input" type="password" placeholder="Digite sua senha"/>
                </div>

                <button className="botaologin-submit" type="submit" >Logar</button>
              </form>

              <div className = 'recuperacao-cadastro'>
                <Link to='/recuperarsenha'>Recuperar Senha</Link>
                <Link to='/cadastrousuario'>Criar Cadastro</Link>
              </div>
            </div>
          )}
        </div>
      )
    }

export default BotaoLogin