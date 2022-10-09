import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCemiterioComponent } from './cadastro-cemiterio.component';

describe('CadastroCemiterioComponent', () => {
  let component: CadastroCemiterioComponent;
  let fixture: ComponentFixture<CadastroCemiterioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroCemiterioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroCemiterioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
