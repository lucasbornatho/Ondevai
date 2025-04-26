import { useContext, useState } from "react";
import {
  Button,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody
} from "reactstrap";
import { UsuarioLogadoContext } from "../../contexts/contextAuth";

function AreaLogin() {

  const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);

  function logoff() {
    if (UsuarioLogadoCtx?.userLoggedIn)
      UsuarioLogadoCtx.setUserLoggedIn(false)
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button color="primary" onClick={toggleOffcanvas}>
      <img className='fotologin' src="Icone Login.png" alt="login" />
      </Button>

      <Offcanvas isOpen={isOpen} toggle={toggleOffcanvas} direction="end">
        <OffcanvasHeader toggle={toggleOffcanvas}>
          <p>Olá {UsuarioLogadoCtx?.name}</p>
        </OffcanvasHeader>
        <OffcanvasBody>
          <a>Conta</a>
          <br />
          <a>Eventos</a>
          <br />
          <button onClick={logoff}>Sair</button>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
}

export default AreaLogin;
