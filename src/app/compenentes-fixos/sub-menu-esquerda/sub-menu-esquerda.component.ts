import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sub-menu-esquerda',
  templateUrl: './sub-menu-esquerda.component.html',
  styleUrls: ['./sub-menu-esquerda.component.css']
})
export class SubMenuEsquerdaComponent implements OnInit {

  @Input() subMenuAtivo = ''
  titulo: string = ''
  @Input() aparecer: boolean = false

  constructor() { }

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
      case 'falecido':
        this.titulo = 'Falecidos'
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
