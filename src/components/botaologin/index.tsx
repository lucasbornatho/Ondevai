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
          <img className='imagembotaologin' src="login.png" alt="" />
          </button>
            
          {LoginVisivel && (
            <div className="botaologin-form">
              <img className='fotologin' src="login.png" alt="login" />
              <form>
                <div className="botaologin-form-div1">
                  <input className="botaologin-form-input" type="text" placeholder="Digite seu usuário ou email"/>
                </div>

                <div className="botaologin-form-div1">
                  <input className="botaologin-form-input" type="password" placeholder="Digite sua senha"/>
                </div>

                <button className="botaologin-submit" type="submit" >Logar</button>
              </form>
              <br />
              <Link to='/senha'> Esqueceu a Senha? </Link>
              <br />
              <Link to='/cadastro'> Faça seu Cadastro</Link>
              
            </div>
          )}
        </div>
      )
    }

export default BotaoLogin