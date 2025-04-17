import { useState } from "react";
import {
  Button,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody
} from "reactstrap";

function AreaLogin() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button color="primary" onClick={toggleOffcanvas}>
        Perfil
      </Button>

      <Offcanvas isOpen={isOpen} toggle={toggleOffcanvas} direction="end">
        <OffcanvasHeader toggle={toggleOffcanvas}>
          Olá {/* nome do usuário */}
        </OffcanvasHeader>
        <OffcanvasBody>
          <a>Conta</a>
          <br />
          <a>Eventos</a>
          <br />
          <a>Sair</a>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
}

export default AreaLogin;
