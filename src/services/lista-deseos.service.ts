import { Injectable } from '@angular/core';
import { Lista } from '../pages/clases/listas';


@Injectable()
export class ListaDeseosService {

  listas:Lista[] = [];

  constructor() {

    this.cargarData();

  }

  actualizarData() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarData() {
    if (localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    }
  }

  agregarLista( lista:Lista ) {
    this.listas.push(lista);
    this.actualizarData();
  }

  getListaItemsLength( lista:Lista ) {
    let mnumItems:number = 0;
    if (lista.items) {
        mnumItems = lista.items.length;
    }
    return mnumItems;
  }

  borrarLista( lista:Lista, index:number ) {
    this.listas.splice(index,1);
    this.actualizarData();
  }


}
