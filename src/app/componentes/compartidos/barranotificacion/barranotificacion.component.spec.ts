import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarranotificacionComponent } from './barranotificacion.component';

describe('BarranotificacionComponent', () => {
  let component: BarranotificacionComponent;
  let fixture: ComponentFixture<BarranotificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarranotificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarranotificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
