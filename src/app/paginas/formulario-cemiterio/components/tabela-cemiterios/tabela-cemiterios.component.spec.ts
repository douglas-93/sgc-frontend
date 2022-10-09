import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaCemiteriosComponent } from './tabela-cemiterios.component';

describe('TabelaCemiteriosComponent', () => {
  let component: TabelaCemiteriosComponent;
  let fixture: ComponentFixture<TabelaCemiteriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaCemiteriosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaCemiteriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
