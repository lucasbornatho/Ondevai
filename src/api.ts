export const api = {

    CarregarTodosEventos: async () => {
        let response = await fetch('http://localhost:3000/eventos')
        let json = await response.json();
        return json;
    },

    //func vai filtrar conforme o parametro informado no filto/eventos
    CarregarEventoUnico: async (id: string) => {
            let response = await fetch('http://localhost:3000/eventos/:id');
            let json = await response.json();
            return json
    },

    AdicionarUsuarios: async (nome: string, datanasc: string, sexo: string, telefone: string, email: string, senha: string) => {
        let response = await fetch('http://localhost:3000/usuarios', {
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

    AdicionarEventos: async (nome: string, genero: string, data: string, horario: string, classificacao: string, descricao: string, endereco: string, numero: string, cep: string, cidade: string, image: string) => {
        let response = await fetch('http://localhost:3000/eventos', {
            method: 'POST',
            body: JSON.stringify({
                nome,
                genero,
                data,
                horario,
                classificacao,
                descricao,
                endereco,
                numero,
                cep,
                cidade,
                image,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        let json = await response.json();
        console.log(json);
        return json;
    },

    LoginUsuario: async (email: string, senha: string) => {

        if (!email || !senha) {
            throw new Error("Email e senha são obrigatórios");
        }

        let response = await fetch('http://localhost:3000/usuarios/login', {
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