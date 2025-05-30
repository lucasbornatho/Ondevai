import { useState, ChangeEvent } from "react";
import { api } from "../../api";
import { useContext } from "react";
import { UsuarioLogadoContext } from '../../contexts/contextAuth'


function CadastroEvento() {

  const usuarioContext = useContext(UsuarioLogadoContext);

  if (!usuarioContext) {
    return <p>Carregando dados do usuário...</p>;
  }

  const usuarioId = usuarioContext.id;

  const [nomeEvento, setNomeEvento] = useState('');
  const handleAddNomeEvento = (e: ChangeEvent<HTMLInputElement>) => {
    setNomeEvento(e.target.value)
  }

  const [generoEvento, setGeneroEvento] = useState('');
  const handleAddGeneroEvento = (e: ChangeEvent<HTMLSelectElement>) => {
    setGeneroEvento(e.target.value)
  }

  const [dataEvento, setDataEvento] = useState('');
  const handleAddDataEvento = (e: ChangeEvent<HTMLInputElement>) => {
    setDataEvento(e.target.value)
  }

  const [horarioEvento, setHorarioEvento] = useState('');
  const handleAddHorarioEvento = (e: ChangeEvent<HTMLInputElement>) => {
    setHorarioEvento(e.target.value)
  }

  const [classificacaoEvento, setClassificacaoEvento] = useState('');
  const handleAddClassificacaoEvento = (e: ChangeEvent<HTMLSelectElement>) => {
    setClassificacaoEvento(e.target.value)
  }


  const [descricaoEvento, setDescricaoEvento] = useState('');
  const handleAddDescricaoEvento = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescricaoEvento(e.target.value)
  }

  const [enderecoEvento, setEnderecoEvento] = useState('');
  const handleAddEnderecoEvento = (e: ChangeEvent<HTMLInputElement>) => {
    setEnderecoEvento(e.target.value)
  }

  const [numeroEvento, setNumeroEvento] = useState('');
  const handleAddNumeroEvento = (e: ChangeEvent<HTMLInputElement>) => {
    setNumeroEvento(e.target.value)
  }

  const [cidadeEvento, setCidadeEvento] = useState('');
  const handleAddCidadeEvento = (e: ChangeEvent<HTMLSelectElement>) => {
    setCidadeEvento(e.target.value)
  }

  const [imagemEvento, setImagemEvento] = useState('');
  const handleAddImagemEvento = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert("Imagem muito grande! O limite é de 2MB.");
      return;
    }


    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ondevai_eventos");

    try {
      const response = await fetch("https://api.cloudinary.com/v1_1/dmghhxein/image/upload", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.secure_url) {
        setImagemEvento(data.secure_url);
        alert("Imagem enviada com sucesso!");
      } else {
        alert("Erro ao enviar imagem");
      }

    } catch (error) {
      console.error("Erro ao fazer upload da imagem:", error);
      alert("Erro ao enviar imagem");
    }
  };

  const handleCadastroEvento = async () => {

    if (!nomeEvento || !generoEvento || !dataEvento || !horarioEvento) {
      alert("Preencha os campos obrigatórios.");
      return;
    }

    try {
      const response = await api.AdicionarEventos(nomeEvento,
        parseInt(generoEvento),
        dataEvento,
        horarioEvento,
        parseInt(classificacaoEvento),
        descricaoEvento,
        enderecoEvento,
        numeroEvento,
        parseInt(cidadeEvento),
        imagemEvento,
        usuarioId);

      if (response.id && response.message) {
        alert('Evento cadastrado com sucesso!');
      } else {
        alert('ERROU AQUI EM.');
      }

    } catch (error) {
      alert('Erro ao cadastrar. Tente novamente.');
      console.error(error);
    }
  };

  return (
    <>
      <div className="container-cadastro-evento">
        <h1 className="texto-cetralizado">Cadastro Evento</h1>

        <div className="cadastro-evento-body">
          <div className="container-dados-evento">
            <h2>Dados Evento</h2>
            <div className="container-item">
              <div className="container-grupo">
                <label>Nome Evento</label>
                <input type="text" onChange={handleAddNomeEvento} />
              </div>
              <div className="container-grupo">
                <label>Genero</label>
                <select className="seletor" onChange={handleAddGeneroEvento}>
                  <option value="0"></option>
                  <option value="1">Rock</option>
                  <option value="2">Teatro</option>
                  <option value="3">Bares</option>
                  <option value="4">Restaurantes</option>
                  <option value="5">Festas</option>
                  <option value="6">Shows</option>
                </select>
              </div>
              <div className="container-grupo">
                <label>Data Evento</label>
                <input type="date" onChange={handleAddDataEvento} />
              </div>
              <div className="container-grupo">
                <label>Horário Evento</label>
                <input type="time" onChange={handleAddHorarioEvento} />
              </div>

              <div className="container-grupo">
                <label>Classificação</label>
                <select className="seletor" onChange={handleAddClassificacaoEvento}>
                  <option value="0"></option>
                  <option value="1">Livre</option>
                  <option value="2">18+</option>
                </select>
              </div>
            </div>
          </div>

          <div className="container-localizacao">
            <h2>Localização</h2>
            <div className="container-item vertical-localizacao">
              <div className="container-grupo full-width">
                <label>Endereço</label>
                <input type="text" onChange={handleAddEnderecoEvento} />
              </div>

              <div className="container-localizacao-row">
                <div className="container-grupo medium-width">
                  <label>Cidade</label>
                  <select className="seletor" onChange={handleAddCidadeEvento}>
                    <option value="0"></option>
                    <option value="1">Bauru</option>
                    <option value="2">Piratininga</option>
                    <option value="3">Pederneiras</option>
                    <option value="4">Agudos</option>
                  </select>
                </div>

                <div className="container-grupo small-width">
                  <label>Numero</label>
                  <input type="text" onChange={handleAddNumeroEvento} />
                </div>
              </div>
            </div>
          </div>

          <div className="container-descricao-evento">
            <h2>Descrição Evento</h2>
            <div className="container-item tamanho-input">
              <textarea onChange={handleAddDescricaoEvento} value={descricaoEvento} maxLength={600} placeholder="Descrição com no maximo 600 caracteres"></textarea>
            </div>
          </div>

          <div className="container-imagem-capa-evento">
            <h2>Imagem Capa Evento</h2>
            <div className="container-item file">
              <label htmlFor="input-arquivo">
                <img src="/carregar-arquivo.png" alt="carregamento" />
              </label>
              <input
                id="input-arquivo"
                className="input-arquivo"
                type="file"
                style={{ display: 'none' }}
                onChange={handleAddImagemEvento}
              />
              <p>Imagem máxima 1140px X 813px</p>
              {imagemEvento && (
                <div>
                  <img src={imagemEvento} alt="Preview" style={{ maxWidth: '200px', marginTop: '10px' }} />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="botao-cadastrar-eventro">
          <button onClick={handleCadastroEvento}>Cadastrar Evento</button>
        </div>
      </div>
    </>
  );
}

export default CadastroEvento;