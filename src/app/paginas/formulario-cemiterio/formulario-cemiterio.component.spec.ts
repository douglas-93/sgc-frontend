import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCemiterioComponent } from './formulario-cemiterio.component';

describe('FormularioCemiterioComponent', () => {
  let component: FormularioCemiterioComponent;
  let fixture: ComponentFixture<FormularioCemiterioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCemiterioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCemiterioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
