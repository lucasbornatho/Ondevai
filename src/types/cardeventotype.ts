export type CardEventoType = {
    id: string;
    nome: string;
    genero?: string | number;
    generoNome: string;
    data_evento: string;
    horario: string;
    classificacao: string | number;
    descricao: string;
    endereco: string;
    numero: string;
    cidade?: string | number;
    cidadeNome: string;
    image: string;
  }