import { useState } from "react";
import { CardEventoType } from "../../types/cardeventotype";


function CardEvento({ id, nome, genero, data, horario, descricao, endereco, numero, image, classificacao }: CardEventoType) {
  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false); // estado para feedback de cópia
  const [evento, setEvento] = useState<CardEventoType | null>(null);

  const toggle = () => setModalOpen(!modalOpen);

  // Função para copiar link
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
          <img className="capa-evento-img" src={evento?.image} alt="Capa do evento" />
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

          <h1>{evento?.nome}</h1>
        </div>

        <div className="evento-saiba-mais">
          <div className="evento-detalhes">
            <p><strong>Data:</strong> {evento?.data || 'sem gênero'}</p>
            <p><strong>Horario:</strong> {evento?.horario || 'sem gênero'}</p>
            <p><strong>Localização:</strong> {evento?.endereco || 'sem localização'} - {evento?.numero || 'sem numero'}</p>
          </div>

          <button onClick={toggle}>Saiba Mais</button>
        </div>
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={toggle}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>

            <div className="modal-header">
              <h2>{evento?.nome}</h2>
              <button className="close-button" onClick={toggle}>X</button>
            </div>

            <div className="modal-body">
              <p><strong>Gênero:</strong> {evento?.genero || 'sem gênero'}</p>
              <p><strong>Data:</strong> {evento?.data || 'sem gênero'}</p>
              <p><strong>Horario:</strong> {evento?.horario || 'sem gênero'}</p>
              <p><strong>Localização:</strong> {evento?.endereco || 'sem localização'} - {evento?.numero || 'sem numero'}</p>
              <p><strong>Classificação:</strong> {evento?.classificacao || 'sem gênero'}</p>
            </div>
            
            <div className="modal-descricao">
              <p><strong>Descrição:</strong> {evento?.descricao || 'sem descrição'}</p>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default CardEvento;