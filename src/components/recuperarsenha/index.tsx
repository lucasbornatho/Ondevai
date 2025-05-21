import { ChangeEvent, useState } from "react";
import { api } from "../../api";

function RecuperarSenha() {
    const [email, setEmail] = useState('');
    const handleAddEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
      }

    const [novaSenha, setNovaSenha] = useState('');
    const handleNovaSenha = (e: ChangeEvent<HTMLInputElement>) => {
        setNovaSenha(e.target.value)
      }

    const [confirmarSenha, setConfirmarSenha] = useState('');
    const handleConfirmarSenha = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmarSenha(e.target.value)
      }

    const [mensagem, setMensagem] = useState('');

    const handleRedefinirSenha = async () => {

        if (!email || !novaSenha || !confirmarSenha) {
            setMensagem('Por favor, preencha todos os campos.');
            alert('Por favor, preencha todos os campos.');
            return;
        }
    
        if (novaSenha !== confirmarSenha) {
            setMensagem('As senhas não coincidem.');
            alert('As senhas não coincidem.');
            return;
        }
    
            setMensagem('Redefinindo a senha...');
            alert('Redefinindo a senha...');
        
        try {
            const response = await api.AlterarSenha(email, novaSenha);
            
            
            if (response.successo) {  // criar um sucess na API
                alert('Senha redefinida com sucesso!');
                setMensagem('Senha redefinida com sucesso!');
            } else {
                alert('Erro ao redefinir a senha. Tente novamente.');
                setMensagem('Erro ao redefinir a senha. Tente novamente.');
            }
    
        } catch (error) {
            alert('Erro ao redefinir a senha. Tente novamente.');
            setMensagem('Erro ao redefinir a senha. Tente novamente.');
            console.error(error);
        }
    };
    
    return (
        <div>
            <div className="recsenha">
                <div className="cabecalho_recsenha">
                    <h1><strong>Onde Vai</strong></h1>
                    <h2>Recuperação de senha</h2>
                    <p>Informe seu email e crie uma nova senha para acessar</p>
                </div>

                <form onSubmit={handleRedefinirSenha}>
                    <div className="email_recsenha">
                        <label>Email</label>
                        <input 
                            type="email" 
                            placeholder="seuemail@gmail.com" 
                            value={email} 
                            onChange={handleAddEmail} 
                        />
                    </div>

                    <div>
                        <div className="novasenha_recsenha">
                            <label>Nova Senha</label>
                            <input 
                                type="password" 
                                placeholder="Digite sua nova senha" 
                                value={novaSenha} 
                                onChange={handleNovaSenha} 
                            />
                        </div>

                        <div className="csenha_recsenha">
                            <label>Confirmar Senha</label>
                            <input 
                                type="password" 
                                placeholder="Confirme sua nova senha" 
                                value={confirmarSenha} 
                                onChange={handleConfirmarSenha} 
                            />
                        </div>
                    </div><br />

                    <button className="button_recsenha" type="submit">Redefinir Senha</button>

                    {mensagem && <p>{mensagem}</p>}
                </form>
            </div>
        </div>
    );
}

export default RecuperarSenha;