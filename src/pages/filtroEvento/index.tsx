import { useLocation } from "react-router-dom";
import Cabecalho from "../../components/cabecalho";
import Filtro from "../../components/filtro";
import Rodape from "../../components/rodape";
import { useState } from "react";

interface Evento {
  id: string;
  nome: string;
  data_evento: string;
  horario: string;
  genero: { id: number; nome: string };
  cidade: { id: number; nome: string };
  endereco: string;
  numero: string;
  descricao: string;
  classificacao: number;
  image: string;
}

function FiltroEvento() {
  const location = useLocation();
  const eventos: Evento[] = location.state?.eventos || [];

  const classificacoes: { [key: number]: string } = {
    1: "Livre",
    2: "18+"
  };
  
    const [modalOpen, setModalOpen] = useState(false);
    const [copied, setCopied] = useState(false);
  
    const toggle = () => setModalOpen(!modalOpen);
  
    const handleShare = async () => {
      const linkDoEvento = `${window.location.origin}/eventos/}`;
      try {
        await navigator.clipboard.writeText(linkDoEvento);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Erro ao copiar link:", err);
      }
    };

  return (
    
    <div>
      <Cabecalho/>
      <Filtro/>

      {eventos.length === 0 ? (
        <h1 className="evento-nao-encontrado">Nenhum evento encontrado.</h1>
      ) : (
        eventos.map((evento) => (
         
          <div key={evento.id} className="card-evento">
            <div className="card-evento">
              <div className="capa-evento">
                <p className="classificacaoDestaque">{classificacoes[Number(evento.classificacao)] || 'sem classificação'}</p>
                <img className="capa-evento-img" src={evento.image} alt="Capa do evento" />
              </div>

              <div className="evento-informacoes">
                <div className="evento-icones">
                  <img src="/capa-evento-icones/compartilhar.png"
                    alt="Compartilhar"
                    style={{ cursor: "pointer" }}
                    onClick={handleShare}
                    title="Compartilhar" />

                  {copied && (
                    <div className="alerta-copiado">
                      Link copiado para a área de transferência!
                    </div>
                  )}
                </div>

                <h1>{evento.nome}</h1>
              </div>

              <div className="evento-saiba-mais">
                <div className="evento-detalhes">
                  <p><strong>Data:</strong> {evento.data_evento || 'sem data'}</p>
                  <p><strong>Horario:</strong> {evento.horario || 'sem horário'}</p>
                  <p><strong>Localização:</strong> {evento.endereco || 'sem localização'} - {evento.numero || 'sem número'}</p>
                </div>

                <button onClick={toggle}>Saiba Mais</button>
              </div>
            </div>

            {modalOpen && (
              <div className="modal-overlay" onClick={toggle}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                  <div className="modal-header">
                    <h2>{evento.nome}</h2>
                    <button className="close-button" onClick={toggle}>X</button>
                  </div>

                  <div className="modal-body">
                    <p><strong>Gênero:</strong> {evento.genero.nome || 'sem gênero'}</p>
                    <p><strong>Data:</strong> {evento.data_evento || 'sem data'}</p>
                    <p><strong>Horario:</strong> {evento.horario || 'sem horário'}</p>
                    <p><strong>Localização:</strong> {evento.endereco || 'sem localização'} - {evento.numero || 'sem número'}</p>
                    <p><strong>Classificação:</strong> {classificacoes[Number(evento.classificacao)] || 'sem classificação'}</p>
                  </div>

                  <div className="modal-descricao">
                    <p><strong>Descrição:</strong> {evento.descricao || 'sem descrição'}</p>
                  </div>

                </div>
              </div>
            )}          

          </div>
        ))
      )}
  
      <Rodape/>
    </div>
  );
}

export default FiltroEvento;