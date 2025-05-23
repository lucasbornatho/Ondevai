import { useState } from "react";
import { CardEventoType } from "../../types/cardeventotype";

function CardEvento({ id, nome, generoNome, data_evento, horario, descricao, endereco, numero,cidadeNome, image, classificacao }: CardEventoType) {

  const classificacoes: { [key: number]: string } = {
  1: "Livre",
  2: "18+"
};

  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggle = () => setModalOpen(!modalOpen);

  const handleShare = async () => {
    const linkDoEvento = `${window.location.origin}/eventos/${id}`;
    try {
      await navigator.clipboard.writeText(linkDoEvento);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Erro ao copiar link:", err);
    }
  };
  
  return (
    <>
      <div className="card-evento">
        <div className="capa-evento">
          <img className="capa-evento-img" src={image} alt="Capa do evento" />
        </div>

        <div className="evento-informacoes">
          <div className="evento-icones">
            <img src="/capa-evento-icones/classificacao livre.png" alt="Livre" />
            <img src="/capa-evento-icones/compartilhar.png" 
              alt="Compartilhar" 
              style={{cursor: "pointer"}} 
              onClick={handleShare} 
              title="Compartilhar"/>
            <img src="/capa-evento-icones/evento curtir.png" alt="Curtir" />

            {copied && (
              <div className="alerta-copiado">
                Link copiado para a área de transferência!
              </div>
            )}
          </div>

          <h1>{nome}</h1>
        </div>

        <div className="evento-saiba-mais">
          <div className="evento-detalhes">
            <p><strong>Data:</strong> {data_evento || 'sem data'}</p>
            <p><strong>Horario:</strong> {horario || 'sem horário'}</p>
            <p><strong>Localização:</strong> {endereco || 'sem localização'} - {numero || 'sem número'}</p>
          </div>

          <button onClick={toggle}>Saiba Mais</button>
        </div>
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={toggle}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>

            <div className="modal-header">
              <h2>{nome}</h2>
              <button className="close-button" onClick={toggle}>X</button>
            </div>

            <div className="modal-body">
              <p><strong>Gênero:</strong> {generoNome || 'sem gênero'}</p>
              <p><strong>Data:</strong> {data_evento || 'sem data'}</p>
              <p><strong>Horario:</strong> {horario || 'sem horário'}</p>
              <p><strong>Localização:</strong> {endereco || 'sem localização'} - {numero || 'sem número'}</p>
              <p><strong>Classificação:</strong> {classificacoes[Number(classificacao)] || 'sem classificação'}</p>
            </div>
            
            <div className="modal-descricao">
              <p><strong>Descrição:</strong> {descricao || 'sem descrição'}</p>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default CardEvento