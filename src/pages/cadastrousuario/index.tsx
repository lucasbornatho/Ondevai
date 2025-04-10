import Cabecalho from "../../components/cabecalho"
import Rodape from "../../components/rodape"

import "../../estilo/estilo.css"
import "../../components/botaologin"
import CadastroUsuario from "../../components/cadastrousuario";

function CadastroUsuariopage() {
  
    return (
      <div>
        <Cabecalho/>
        <CadastroUsuario/>
        <Rodape/>

      </div>
        )
     }
  


export default CadastroUsuariopage

