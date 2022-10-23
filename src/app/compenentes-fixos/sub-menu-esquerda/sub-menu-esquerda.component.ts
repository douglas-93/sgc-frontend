import {Component, Input, OnInit} from '@angular/core';
import {faClipboardList} from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-sub-menu-esquerda',
    templateUrl: './sub-menu-esquerda.component.html',
    styleUrls: ['./sub-menu-esquerda.component.css']
})
export class SubMenuEsquerdaComponent implements OnInit {

    @Input() subMenuAtivo = ''
    @Input() aparecer: boolean = false
    titulo: string = ''
    faIcon = faClipboardList

    constructor() {
    }

    ngOnInit(): void {
    }

    ngOnChanges() {
        switch (this.subMenuAtivo) {
            case 'cemiterio':
                this.titulo = 'Cemitérios'
                break
            case 'sepultura':
                this.titulo = 'Sepulturas'
                break
            case 'pessoa':
                this.titulo = 'Pessoas'
                break
            case 'relatorio':
                this.titulo = 'Relatórios'
                break
            case 'configuracao':
                this.titulo = 'Configurações'
                break

        }
    }
}
