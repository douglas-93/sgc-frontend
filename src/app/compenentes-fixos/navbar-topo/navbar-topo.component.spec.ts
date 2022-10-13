import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NavbarTopoComponent} from './navbar-topo.component';

describe('NavbarTopoComponent', () => {
    let component: NavbarTopoComponent;
    let fixture: ComponentFixture<NavbarTopoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NavbarTopoComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(NavbarTopoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
