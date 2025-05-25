import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import { api } from '../../api';
import "../../estilo/estilo.css";

function CadastroUsuario() {
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const handleAddNome = (e: ChangeEvent<HTMLInputElement>) => {
    setNome(e.target.value)
  }

  const [datanasc, setDatanasc] = useState('');
  const handleAddDatanasc = (e: ChangeEvent<HTMLInputElement>) => {
    setDatanasc(e.target.value)
  }

  const [telefone, setTelefone] = useState('');
  const handleAddTelefone = (e: ChangeEvent<HTMLInputElement>) => {
    setTelefone(e.target.value)
  }
  const [sexo, setSexo] = useState('');
  const handleAddSexo = (e: ChangeEvent<HTMLSelectElement>) => {
    setSexo(e.target.value)
  }

  const [email, setEmail] = useState('');
  const handleAddEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const [senha, setSenha] = useState('');
  const handleAddSenha = (e: ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value)
  }

  const handleCadastro = async () => {

    if (!nome || !email || !senha) {
      alert("Preencha os campos obrigatórios.");
      return;
    }

    try {
      const response = await api.AdicionarUsuarios(nome, datanasc, parseInt(sexo), telefone, email, senha);
      console.log(response);

      if (response.message === "USUARIO cadastrado!") {
        alert('Cadastro realizado com sucesso!');
        navigate('/');
      } else {
        alert('TA ERRADO AQUI.');
      }

    } catch (error) {
      alert('Erro ao cadastrar. Tente novamente.');
      console.error(error);
    }
  };

  return (
    <div className="container-cadastroUsuario">

      <div className="container-cadastroUsuario-flex">

        <div className="container-ladoEsquerdo">
          <div>
            <img src="./public/Icone OndeVai.png" alt="Icone Onde Vai" />
            <h1 className="botaocadastrologin-titulo"><strong>Onde Vai</strong></h1>
          </div>
          <p>Conectando pessoas a eventos.</p>
        </div>

        <div className='container-ladoDireito'>

          <div className='ladoDireito-Cabecario'>
            <h1>Crie sua Conta</h1>
            <p>Junte-se à nossa comunidade e comece a buscar os eventos na sua cidade.</p>
          </div>

          <div className='formularioCadastro'>

            <div className='formularioCadastro-subdiv'>
              <div className='formularioCadastro-item'>
                <label>Nome Completo</label>
                <input
                  type="text"
                  placeholder="Nome Completo"
                  value={nome}
                  onChange={handleAddNome} />
              </div>

              <div className='formularioCadastro-item'>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleAddEmail} />
              </div>
            </div>
            
            <div className='formularioCadastro-subdiv2'>
              <div className='formularioCadastro-item'>
                <label>Data Nascimento</label>
                <input
                  type="date"
                  placeholder="Data de Nascimento"
                  value={datanasc}
                  onChange={handleAddDatanasc} />
              </div>

              <div className='formularioCadastro-item'>
                <label>Genero</label>
                <select onChange={handleAddSexo}>
                  <option value="0">Genero</option>
                  <option value="1">Feminino</option>
                  <option value="2">Masculino</option>
                  <option value="3">Outros</option>
                </select>
              </div>

              <div className='formularioCadastro-item'>
                <label>Telefone</label>
                <input
                  type="text"
                  placeholder="Telefone"
                  value={telefone}
                  onChange={handleAddTelefone} />
              </div>
            </div>

            <div className='formularioCadastro-subdiv'>
              <div className='formularioCadastro-item'>
                <label>Senha</label>
                <input
                  type="password"
                  placeholder="Senha"
                  value={senha}
                  onChange={handleAddSenha} />
              </div>

              <div className='formularioCadastro-item'>
                <button type="submit"
                  onClick={handleCadastro}>
                  Criar Conta
                </button>
              </div>
            </div>
            
          </div>
          
        </div>

      </div>

    </div>
  );
}

export default CadastroUsuario;
