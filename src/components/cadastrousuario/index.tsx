import "../../estilo/estilo.css"


function CadastroUsuario() {
    // const [LoginVisivel, setLoginVisivel] = useState(false);
  
    // const CadastrarUsuario = () => {
    //   setLoginVisivel(!LoginVisivel);
    // }
  
    return (<div>
        <div className="CadastroUsuario-Container">
        
          <div className="botaologin-container">
          {/* <button onClick={abrirCadastroUsuario} className="Criar Cadastro" >
          <img className='imagembotaologin' src="Icone Login.png" alt="" />
          </button>
              
            {LoginVisivel && ( */}
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
                </div>
             
            {/* )} */}
          </div>
     </div></div>    )
     }
  


export default CadastroUsuario