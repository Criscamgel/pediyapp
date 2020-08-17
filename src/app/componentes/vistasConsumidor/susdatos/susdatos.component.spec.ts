import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SusdatosComponent } from './susdatos.component';

describe('SusdatosComponent', () => {
  let component: SusdatosComponent;
  let fixture: ComponentFixture<SusdatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SusdatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SusdatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
