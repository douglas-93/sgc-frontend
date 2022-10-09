import {Component, Input, OnInit} from '@angular/core';
import {faChurch, faFilePdf, faGear, faPersonDigging, faUserLarge} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-esquerda',
  templateUrl: './menu-esquerda.component.html',
  styleUrls: ['./menu-esquerda.component.css']
})
export class MenuEsquerdaComponent implements OnInit {

  // Icones
  iCemiterio = faChurch
  iFalecido = faUserLarge
  iSepultura = faPersonDigging
  iRelatorios = faFilePdf
  iConfiguracao = faGear

  // Variáveis de controle
  @Input() menuAtivo: boolean = false
  subMenuAtivo: string = ''
  mostrarSubMenu: boolean = false


  constructor() {
  }

  ngOnInit(): void {
  }

  verificaSubMenu(clique: string) {
    if (this.mostrarSubMenu && (this.subMenuAtivo == clique)) {
      this.mostrarSubMenu = !this.mostrarSubMenu
    } else {
      this.mostrarSubMenu = true
    }
  }

}
