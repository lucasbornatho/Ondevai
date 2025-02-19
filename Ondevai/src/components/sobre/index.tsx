import { useNavigate} from "react-router-dom"

function Sobre () {

        const navegacao = useNavigate();

        function HandleBack(){
            navegacao('/');
        }

        return(
            <div>
                <h1>Esta é a pagina SOBRE!</h1>

                <button onClick={HandleBack}> Home </button>
            </div>
        )


}

export default Sobre