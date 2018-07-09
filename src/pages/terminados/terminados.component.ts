import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../services/lista-deseos.service';
import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';
import { ListaDetalleComponent } from '../lista-detalle/lista-detalle.component';
import { TerminadosPipe } from '../../pipes/terminados.pipe';

@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.component.html',
})
export class TerminadosComponent implements OnInit {
  constructor( private _listaDeseos:ListaDeseosService,
                private navCtrl:NavController ) {  }

  ngOnInit() {}

  irAgregar() {
    this.navCtrl.push(AgregarComponent);
  }

  verDetalle( lista, index ) {
    this.navCtrl.push(ListaDetalleComponent, { lista, index});
  }


}
