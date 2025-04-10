import "../../estilo/estilo.css"
import { useNavigate } from 'react-router-dom';



function CadastroUsuario() {
  const navigate = useNavigate();

  const sairDaTela = () => {
    navigate("/menu");
  };
   
  
    return (<div> 
        <div className="CadastroUsuario-Container">
        
          <div className="botaologin-container">
            
              <div className="botaocadastrologin-form">
                <h1>Onde vai Cadastro</h1>
                <img className='fotologin' src="Icone Login.png" alt="login" />
                <form>
                  <div className="botaocadastrologin-form-div1">
                    <input className="botaocadastrologin-form-input" type="text" placeholder="Nome Completo"/>
                  </div>
                  <div className="botaocadastrologin-form-div1">
                    <input className="botaocadastrologin-form-input" type="text" placeholder="Email"/>
                  </div>
                  <div className="botaocadastrologin-form-div1">
                    <input className="botaocadastrologin-form-input" type="password" placeholder="Senha"/>
                  </div>
                  <div className="botaocadastrologin-form-div1">
                    <input className="botaocadastrologin-form-input" type="text" placeholder="Telefone"/>
                  </div>
  
                  <div className="botaocadastrologin-form-div1">
                    <input className="botaocadastrologin-form-input" type="text" placeholder="Sexo"/>
                  </div>
  
                  <button className="botaologin-submit" type="submit" >Cadastre-se</button>
                </form>
            
            <button onClick={sairDaTela} className="fechar-btn">Fechar</button>
                </div>
             
            {/* )} */}
          </div>
     </div></div>    )
     }
  


export default CadastroUsuario