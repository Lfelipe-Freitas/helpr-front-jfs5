import { Cargo } from "./cargo";

export interface Funcionario {
    id?: number;
    nome: string;
    email: string;
    cpf: string;
    telefone: string;
    cargo: Cargo;
    foto?: string;
    senha?: string;
}
