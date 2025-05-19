import { ChangeEvent, useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import { api } from '../../api';
import { UsuarioLogadoContext } from '../../contexts/contextAuth';



function BotaoLogin() {
  const [LoginVisivel, setLoginVisivel] = useState(false);
  const navigate = useNavigate();
  const loginRef = useRef<HTMLDivElement>(null); // ref para o form de login


  const Context = useContext(UsuarioLogadoContext);

  const logar = async (email: string, senha: string) => {

    let json = await api.LoginUsuario(addEmail, addSenha);

    console.log("Resposta do login:", json);

    if (json.status) {
      alert("Bem vindo, " + json.usuario.nome);
      Context?.setName(json.usuario.nome);
      Context?.setID(json.usuario.id);
      navigate('/eventos');
    } else {
      alert(json.message)
    }
  }

  const [addEmail, setAddEmail] = useState('');
  const handleAddEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddEmail(e.target.value)
  }

  const [addSenha, setAddSenha] = useState('');
  const handleAddSenhaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddSenha(e.target.value)
  }


  const abrirLogin = () => {
    setLoginVisivel(!LoginVisivel);
  }

  useEffect(() => {
    const handleClickFora = (event: MouseEvent) => {
      if (LoginVisivel && loginRef.current && !loginRef.current.contains(event.target as Node)) {
        setLoginVisivel(false);
      }
    };

    document.addEventListener('mousedown', handleClickFora);
    return () => {
      document.removeEventListener('mousedown', handleClickFora);
    };
  }, [LoginVisivel])


  return (
    <div className="botaologin-container">
      <button onClick={abrirLogin} className="botaologin">
        <img className='imagembotaologin' src="Icone Login.png" alt="" />
      </button>

      {LoginVisivel && (
        <div className="botaologin-form" ref={loginRef}>
          <h1>Bem Vindo ao Onde Vai</h1>
          <img className='fotologin' src="Icone Login.png" alt="login" />


          <form>
            <div className='botaologin-form-div1'>
              <input className='botaologin-form-input' type="text" placeholder="Login" value={addEmail} onChange={handleAddEmailChange} />
            </div>

            <div className='botaologin-form-div1'>
              <input className='botaologin-form-input' type="password" placeholder="Senha" value={addSenha} onChange={handleAddSenhaChange} />
            </div>

            <button className='botaologin-submit' type="button" onClick={() => logar(addEmail, addSenha)}>Logar</button>
          </form>

          <div className='recuperacao-cadastro'>
            <Link to='/recuperarsenha'>Recuperar Senha</Link>
            <Link to='/cadastrousuario'>Criar Cadastro</Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default BotaoLogin