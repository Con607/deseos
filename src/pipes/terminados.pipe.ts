import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../pages/clases/listas';

@Pipe({
  name: 'terminados',
  pure: false
})
export class TerminadosPipe implements PipeTransform {
  transform( listas:Lista[], estado:boolean = true ):Lista[] {

    let listaTerminados:Lista[] = [];

    for( let lista of listas ) {
      if (lista.terminada == estado) {
          listaTerminados.push(lista);
      }
    }

    return listaTerminados;
  }
}
