import { ReactNode, createContext, useState, useEffect } from "react";
import { api } from "../api";

type ContextType = {
    name: string;
    setName: (n: string) => void;
    userLoggedIn: boolean;
    setUserLoggedIn: (status: boolean) => void;
}

export const UsuarioLogadoContext = createContext<ContextType | null>(null);

export const UsuarioLogadoProvider = ({children}: {children: ReactNode}) => {
    const [name, setName] = useState('');
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const verificarLogin = async () => {
            try {
                const response = await api.LoginUsuario('usuario@example.com', 'senha');
                if (response && response.nome) {
                    setName(response.nome);
                    setUserLoggedIn(true);
                }
            } catch (err) {
                console.log('Erro ao verificar login', err);
                setUserLoggedIn(false);
            }
        };

        verificarLogin();
    }, []);

    return (
        <UsuarioLogadoContext.Provider value={{ name, setName, userLoggedIn, setUserLoggedIn }}>
            {error ? <p>{error}</p> : children}
        </UsuarioLogadoContext.Provider>
    );
};
