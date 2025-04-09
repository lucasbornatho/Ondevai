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

    AdicionarUsuarios: async (title: string, body: string, userID: number) => {
        let response = await fetch('', {
            method: 'POST',
            body: JSON.stringify({
                title,
                body,
                userID
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        let json = await response.json();
        console.log(json);
        return json;
    },

    AdicionarEventos: async (id: string, nome: string, genero: string, descricao: string, localizacao: string, image: string) => {
        let response = await fetch('', {
            method: 'POST',
            body: JSON.stringify({
                id,
                nome,
                genero,
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
    }
}