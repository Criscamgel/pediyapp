import { TestBed } from '@angular/core/testing';

import { PedidoServicioService } from './pedido-servicio.service';

describe('PedidoServicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PedidoServicioService = TestBed.get(PedidoServicioService);
    expect(service).toBeTruthy();
  });
});
