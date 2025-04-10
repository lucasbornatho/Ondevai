export const api = {

    CarregarTodosEventos: async () => {
        let response = await fetch('')
        let json = await response.json();
        return json;
    },

    //func vai filtrar conforme o parametro informado no filto/eventos
    CarregarEventoUnico: async (param:string) => {
            let response = await fetch('');
            let json = await response.json();
            return json
    },

    AdicionarUsuarios: async (id: string, nome: string, datanasc: string, sexo: string, email: string, telefone: string, senha: string) => {
        let response = await fetch('', {
            method: 'POST',
            body: JSON.stringify({
                id,
                nome,
                datanasc,
                sexo,
                email,
                telefone,
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

    AdicionarEventos: async (id: string, nome: string, genero: string, data: string, horario: string, descricao: string, localizacao: string, image: string) => {
        let response = await fetch('', {
            method: 'POST',
            body: JSON.stringify({
                id,
                nome,
                genero,
                data,
                horario,
                descricao,
                localizacao,
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

        let response = await fetch('', {
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