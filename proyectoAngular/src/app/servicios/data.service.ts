import { Injectable, EventEmitter } from '@angular/core';
import { IReceta } from '../modelos/recetas.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  onCambioData: EventEmitter<IReceta[]> = new EventEmitter<IReceta[]>()

  private data: IReceta[] = [
    { titulo: "Arroz con pato", descripcion: "plato tradicional norteño" },
    { titulo: "Picante de cuy", descripcion: "plato típico de la sierra" },
    { titulo: "Tacacho con cecina", descripcion: "plato típico de la selva" }
  ]


  constructor() { }

  listar(): IReceta[] {
    return this.data
  }

  eliminar(indice: number): void {
    if (confirm("¿Está seguro?")) {
      this.data.splice(indice, 1)
    }
    this.onCambioData.emit(this.data)
  }
}
