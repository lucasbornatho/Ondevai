import { useContext, useState } from "react";
import {
  Button,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody
} from "reactstrap";
import { UsuarioLogadoContext } from "../../contexts/contextAuth";
import { useNavigate } from "react-router-dom";

function AreaLogin() {

  const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);
  const navigate = useNavigate();

  function logoff() {
    if (UsuarioLogadoCtx?.name)
      UsuarioLogadoCtx.setName('');
      navigate('/');
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button
        color="primary"
        onClick={toggleOffcanvas}
        style={{
          backgroundImage: "url('/Icone Login.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "transparent",
          boxShadow: "none",               
          border: "none",                  
          width: "60px",
          height: "60px",
          padding: 0,                   
          minWidth: 0,
        }}
      >
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
