import { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { CardEventoType } from "../../types/cardeventotype";


function CardEvento({ id, nome, genero, data, horario, descricao, endereco, numero, image, classificacao }: CardEventoType) {
  const [modalOpen, setModalOpen] = useState(false);

  const toggle = () => setModalOpen(!modalOpen);

  return (
    <>
      <div className="card-evento">
        <div className="capa-evento">
          <img className="capa-evento-img" src={image} alt="Capa do evento" />
        </div>

        <div className="evento-informacoes">
          <div className="evento-icones">
            <img src="/capa-evento-icones/classificacao livre.png" alt="Livre" />
            <img src="/capa-evento-icones/compartilhar.png" alt="Compartilhar" />
            <img src="/capa-evento-icones/evento curtir.png" alt="Curtir" />
          </div>

          <h1>{nome}</h1>
        </div>

        <div className="evento-saiba-mais">
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
              <p><strong>Gênero:</strong> {genero || 'sem gênero'}</p>
              <p><strong>Data:</strong> {data || 'sem gênero'}</p>
              <p><strong>Horario:</strong> {horario || 'sem gênero'}</p>
              <p><strong>Localização:</strong> {endereco || 'sem localização'} - {numero || 'sem numero'}</p>
              <p><strong>Classificação:</strong> {classificacao || 'sem gênero'}</p>
            </div>
            
            <div className="modal-descricao">
              <p><strong>Descrição:</strong> {descricao || 'sem descrição'}</p>
            </div>

          </div>
        </div>
      )}
    
      
      {/* <Modal isOpen={modalOpen} toggle={toggle} style={{
        maxWidth:"800px"  ,
        height: "460px",
        backgroundColor: "#E3CCAE",
        padding: "2rem",
        borderRadius: "12px", 
        display: "flex"
      }}>
        <ModalHeader toggle={toggle} style={{
          backgroundColor: "#E3CCAE"        

    
        }}>{nome}</ModalHeader>
          <ModalBody style={{
            backgroundColor: "#E3CCAE",
        
          
          }}>
            <div>
              <div>
                <p><strong>Gênero:</strong> {genero || 'sem gênero'}</p>
                <p><strong>Localização:</strong> {endereco || 'sem localização'} - {numero || 'sem numero'}</p>
              </div>
              <p><strong>Descrição:</strong> {descricao || 'sem descrição'}</p>
            </div>
          </ModalBody>
      </Modal> */}
    </>
  );
}

export default CardEvento;