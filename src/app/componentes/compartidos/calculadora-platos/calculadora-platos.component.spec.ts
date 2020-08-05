import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraPlatosComponent } from './calculadora-platos.component';

describe('CalculadoraPlatosComponent', () => {
  let component: CalculadoraPlatosComponent;
  let fixture: ComponentFixture<CalculadoraPlatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculadoraPlatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
