import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaMainComponent } from './pessoa-main.component';

describe('PessoaMainComponent', () => {
  let component: PessoaMainComponent;
  let fixture: ComponentFixture<PessoaMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoaMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
