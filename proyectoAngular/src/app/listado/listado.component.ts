import { DataService } from '../servicios/data.service';
import { Component, OnInit } from '@angular/core';
import { IReceta } from '../modelos/recetas.interfaces';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  data: IReceta[] = []

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.listar()

    this.dataService.onCambioData
      .subscribe(
        elementos => this.data = elementos
      )
  }

}
