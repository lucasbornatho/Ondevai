export const api = {

    CarregarTodosEventos: async () => {
        let response = await fetch('https://api-ondevai.onrender.com/eventos')
        let json = await response.json();
        return json;
    },

    CarregarEventoUnico: async (id: string) => {
            let response = await fetch(`https://api-ondevai.onrender.com/eventos/${id}`);
            let json = await response.json();
            return json
    },

    AdicionarUsuarios: async (nome: string, datanasc: string, sexo: number, telefone: string, email: string, senha: string) => {
        let response = await fetch('https://api-ondevai.onrender.com/usuarios', {
            method: 'POST',
            body: JSON.stringify({
                nome,
                datanasc,
                sexo,
                telefone,
                email,
                senha
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        let json = await response.json();
        console.log(json);
        return json;
    },

    AdicionarEventos: async (
  nome: string,
  genero: number,
  data_evento: string,
  horario: string,
  classificacao: number,
  descricao: string,
  endereco: string,
  numero: string,
  cidade: number,
  image: string,
  usuarioId: string | undefined
) => {
  let response = await fetch('https://api-ondevai.onrender.com/eventos', {
    method: 'POST',
    body: JSON.stringify({
      nome,
      genero,
      data_evento,
      horario,
      classificacao,
      descricao,
      endereco,
      numero,
      cidade,
      image,
      usuario: usuarioId
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  let json = await response.json();
  console.log(json);
  return json;
},

    FiltrarEventos: async (data: string, genero: string, cidade: string) => {
        let response = await fetch('https://api-ondevai.onrender.com/eventos/filtrar', {
            method: 'POST',
            body: JSON.stringify({
                data,
                genero,
                cidade
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        let json = await response.json();
        return json;
    },

    LoginUsuario: async (email: string, senha: string) => {

        if (!email || !senha) {
            throw new Error("Email e senha são obrigatórios");
        }

        let response = await fetch('https://api-ondevai.onrender.com/usuarios/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
                senha
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        let json = await response.json();
        console.log(json);
        return json;
    },

    AlterarSenha: async (email: string, senha: string) => {

        if (!email || !senha) {
            throw new Error("Email e senha são obrigatórios");
        }

        let response = await fetch('https://api-ondevai.onrender.com/usuarios/alterarsenha', {
            method: 'POST',
            body: JSON.stringify({
                email,
                senha
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        let json = await response.json();
        console.log(json);
        return json;
    }
}