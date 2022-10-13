import {Component, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-navbar-topo',
    templateUrl: './navbar-topo.component.html',
    styleUrls: ['./navbar-topo.component.css']
})
export class NavbarTopoComponent implements OnInit {

    @Output() menuAtivo: boolean = false

    constructor() {
    }

    ngOnInit(): void {
    }

    expandeMenu() {
        this.menuAtivo = !this.menuAtivo
    }
}
