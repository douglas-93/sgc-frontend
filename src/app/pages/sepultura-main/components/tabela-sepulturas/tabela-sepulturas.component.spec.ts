import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaSepulturasComponent } from './tabela-sepulturas.component';

describe('TabelaSepulturasComponent', () => {
  let component: TabelaSepulturasComponent;
  let fixture: ComponentFixture<TabelaSepulturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaSepulturasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaSepulturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
