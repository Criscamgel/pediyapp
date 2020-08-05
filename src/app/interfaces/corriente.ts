import { SegmentoPlato } from './segmento-plato';

export interface Corriente {
    entrada: SegmentoPlato;
    principio: SegmentoPlato;
    proteina: SegmentoPlato;
    bebida: SegmentoPlato;
}
