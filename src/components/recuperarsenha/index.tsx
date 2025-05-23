import { type ChangeEvent, useState, type FormEvent } from "react"
import { api } from "../../api"
import "../../estilo/estilo.css"

function RecuperarSenha() {
  const [email, setEmail] = useState("")
  const handleAddEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const [novaSenha, setNovaSenha] = useState("")
  const handleNovaSenha = (e: ChangeEvent<HTMLInputElement>) => {
    setNovaSenha(e.target.value)
  }

  const [confirmarSenha, setConfirmarSenha] = useState("")
  const handleConfirmarSenha = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmarSenha(e.target.value)
  }

  const [mensagem, setMensagem] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleRedefinirSenha = async (e: FormEvent) => {
    e.preventDefault() // Previne o comportamento padrão do formulário

    if (!email || !novaSenha || !confirmarSenha) {
      setMensagem("Por favor, preencha todos os campos.")
      return
    }

    if (novaSenha !== confirmarSenha) {
      setMensagem("As senhas não coincidem.")
      return
    }

    setMensagem("Redefinindo a senha...")
    setIsLoading(true)

    try {
      const response = await api.AlterarSenha(email, novaSenha)

      if (response.sucesso) {
        setMensagem("Senha redefinida com sucesso!")
      } else {
        setMensagem("Erro ao redefinir a senha. Tente novamente.")
      }
    } catch (error) {
      setMensagem("Erro ao redefinir a senha. Tente novamente.")
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="recovery-container">
      <div className="recovery-card">
        <div className="cabecalho_recsenha">
          <h1 className="brand-title">
            <strong>Onde Vai</strong>
          </h1>
          <h2 className="recovery-title">Recuperação de senha</h2>
          <p className="recovery-subtitle">Informe seu email e crie uma nova senha para acessar</p>
        </div>

        <form onSubmit={handleRedefinirSenha} className="recovery-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="input-field"
              type="email"
              placeholder="seuemail@gmail.com"
              value={email}
              onChange={handleAddEmail}
            />
          </div>

          <div className="password-fields">
            <div className="form-group">
              <label htmlFor="novaSenha">Nova Senha</label>
              <input
                id="novaSenha"
                className="input-field"
                type="password"
                placeholder="Digite sua nova senha"
                value={novaSenha}
                onChange={handleNovaSenha}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmarSenha">Confirmar Senha</label>
              <input
                id="confirmarSenha"
                className="input-field"
                type="password"
                placeholder="Confirme sua nova senha"
                value={confirmarSenha}
                onChange={handleConfirmarSenha}
              />
            </div>
          </div>

          <button className="recovery-button" type="submit" disabled={isLoading}>
            {isLoading ? "Processando..." : "Redefinir Senha"}
          </button>

          {mensagem && (
            <div className={`message ${mensagem.includes("sucesso") ? "success-message" : "error-message"}`}>
              {mensagem}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default RecuperarSenha
