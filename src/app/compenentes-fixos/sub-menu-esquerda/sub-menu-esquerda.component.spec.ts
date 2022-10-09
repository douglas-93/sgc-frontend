import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuEsquerdaComponent } from './sub-menu-esquerda.component';

describe('SubMenuEsquerdaComponent', () => {
  let component: SubMenuEsquerdaComponent;
  let fixture: ComponentFixture<SubMenuEsquerdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubMenuEsquerdaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubMenuEsquerdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
