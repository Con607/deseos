import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../pages/clases/listas';

@Pipe({
  name: 'pendientes',
  pure: false
})
export class PendientesPipe implements PipeTransform {
  transform( listas:Lista[], estado:boolean = false ):Lista[] {

    let listasPendientes:Lista[] = [];

    for( let lista of listas ) {
      if (lista.terminada == estado) {
          listasPendientes.push(lista);
      }
    }

    return listasPendientes;
  }
}
