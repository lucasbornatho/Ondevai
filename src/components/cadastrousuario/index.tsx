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
    <div className="CadastroUsuario-Container">

      <div className="botaologin-container">
        <div className="botaocadastrologin-form">
          <h1 className="botaocadastrologin-titulo"><strong>Onde Vai</strong> Cadastre-se</h1>

          <div className='container-formulario-cadastro'>
            <div className="botaocadastrologin-form-div1">
              <input
                type="text"
                placeholder="Nome Completo"
                value={nome}
                onChange={handleAddNome} />
            </div>

            <div className="botaocadastrologin-form-div1">
              <input
                type="date"
                placeholder="Data de Nascimento"
                value={datanasc}
                onChange={handleAddDatanasc} />
            </div>

            <div className="botaocadastrologin-form-div1">
              <select onChange={handleAddSexo}>
                <option value="0">Genero</option>
                <option value="1">Feminino</option>
                <option value="2">Masculino</option>
                <option value="3">Outros</option>
              </select>
            </div>

            <div className="botaocadastrologin-form-div1">
              <input
                type="text"
                placeholder="Telefone"
                value={telefone}
                onChange={handleAddTelefone} />
            </div>


            <div className="botaocadastrologin-form-div1">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleAddEmail} />
            </div>

            <div className="botaocadastrologin-form-div1">
              <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={handleAddSenha} />
            </div>

            <div className="botaocadastrologin-form-div1">
              <button type="submit"
                onClick={handleCadastro}>
                Cadastre-se
              </button>
              <button onClick={() => navigate("/")}>
                <img src="sair (3).png" alt="Sair" />
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default CadastroUsuario;
