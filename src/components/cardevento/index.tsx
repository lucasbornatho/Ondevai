import { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { CardEventoType } from "../../types/cardeventotype";

function CardEvento({ id, nome, genero, descricao, endereco, numero, image }: CardEventoType) {
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
            <img src="/capa-evento-icones/favoritar.png" alt="Favoritar" />
            <img src="/capa-evento-icones/evento curtir.png" alt="Curtir" />
          </div>

          <h1>{nome}</h1>
        </div>

        <div className="evento-saiba-mais">
          <button onClick={toggle}>Saiba Mais</button>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={modalOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>{nome}</ModalHeader>
        <ModalBody>
            <p><strong>Gênero:</strong> {genero || 'sem gênero'}</p>
            <p><strong>Descrição:</strong> {descricao || 'sem descrição'}</p>
            <p><strong>Localização:</strong> {endereco || 'sem localização'}</p>
            <p><strong>Numero:</strong> {numero || 'sem numero'}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Fechar</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default CardEvento;
