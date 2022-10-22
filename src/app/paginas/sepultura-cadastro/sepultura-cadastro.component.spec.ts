import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepulturaCadastroComponent } from './sepultura-cadastro.component';

describe('SepulturaCadastroComponent', () => {
  let component: SepulturaCadastroComponent;
  let fixture: ComponentFixture<SepulturaCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepulturaCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SepulturaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
