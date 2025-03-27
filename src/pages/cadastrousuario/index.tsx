import Cabecalho from "../../components/cabecalho"
import Rodape from "../../components/rodape"
import { useState } from "react";
import "../../estilo/estilo.css"


function CadastroUsuario() {
    // const [LoginVisivel, setLoginVisivel] = useState(false);
  
    // const CadastrarUsuario = () => {
    //   setLoginVisivel(!LoginVisivel);
    // }
  
    return (<div>
    <Cabecalho/>
        <div className="CadastroUsuario">
        
          <div className="botaologin-container">
          {/* <button onClick={abrirCadastroUsuario} className="Criar Cadastro" >
          <img className='imagembotaologin' src="Icone Login.png" alt="" />
          </button>
              
            {LoginVisivel && ( */}
              <div className="botaologin-form">
                <h1>Onde vai Cadastro</h1>
                <img className='fotologin' src="Icone Login.png" alt="login" />
                <form>
                  <div className="botaologin-form-div1">
                    <input className="botaologin-form-input" type="text" placeholder="Nome Completo"/>
                  </div>
                  <div className="botaologin-form-div1">
                    <input className="botaologin-form-input" type="text" placeholder="Email"/>
                  </div>
                  <div className="botaologin-form-div1">
                    <input className="botaologin-form-input" type="password" placeholder="Senha"/>
                  </div>
                  <div className="botaologin-form-div1">
                    <input className="botaologin-form-input" type="text" placeholder="Telefone"/>
                  </div>
  
                  <div className="botaologin-form-div1">
                    <input className="botaologin-form-input" type="text" placeholder="Sexo"/>
                  </div>
  
                  <button className="botaologin-submit" type="submit" >Cadastre-se</button>
                </form>
  
               
             <Rodape/>
                </div>
             
            {/* )} */}
          </div>
     </div></div>    )
     }
  


export default CadastroUsuario