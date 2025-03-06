import { useState } from 'react';

function BotaoLogin() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const toggleLogin = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  return (
        <div className="botaologin-container">
          <button onClick={toggleLogin} className="botaologin"></button>

          {isLoginVisible && (
            <div className="botaologin-form">
              <form>
                <div className="botaologin-form-div1">
                  <label>Login</label>
                  <input type="text" className="botaologin-form-input" placeholder="Digite seu usuário ou email"/>
                </div>

                <div className="botaologin-form-div1">
                  <label>Senha</label>
                  <input type="password" className="botaologin-form-input" placeholder="Digite sua senha"/>
                </div>

                <button type="submit" className="submit-button">Logar</button>
              </form>
            </div>
          )}
        </div>
      );
    }

export default BotaoLogin