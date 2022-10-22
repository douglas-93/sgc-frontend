import {Component, Input, OnInit} from '@angular/core';
import {SepulturaModel} from "../../../../models/sepultura.model";
import {faPencil} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tabela-sepulturas',
  templateUrl: './tabela-sepulturas.component.html',
  styleUrls: ['./tabela-sepulturas.component.css']
})
export class TabelaSepulturasComponent implements OnInit {

    cabecalho: String[] = ['Editar', 'Local/Código', 'Cemitério', 'Responsável'];
    @Input() sepulturas: SepulturaModel[] = [];
    iconeEditar = faPencil


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

    editar(id: string) {
        this.router.navigate([`/sepulturas/edit/${id}`])
    }
}
