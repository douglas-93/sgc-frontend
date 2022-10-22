import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepulturaMainComponent } from './sepultura-main.component';

describe('SepulturaMainComponent', () => {
  let component: SepulturaMainComponent;
  let fixture: ComponentFixture<SepulturaMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepulturaMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SepulturaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
