import { Corriente } from './corriente';
import { Costo } from './costo';

export interface PlatoCorriente {
    tipoPlato: String;
    plato: Corriente;
    costo: Costo;
    comentarios: String;
}
