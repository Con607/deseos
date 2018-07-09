import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Lista, ListaItem } from '../clases/index';
import { ListaDeseosService } from '../../services/lista-deseos.service';

@Component({
  selector: 'app-lista-detalle',
  templateUrl: 'lista-detalle.component.html',
})

export class ListaDetalleComponent implements OnInit {

  lista:Lista;
  index:number;

  constructor(
    public navCtrl:NavController,
    public navParams:NavParams,
    private _listaDeseos:ListaDeseosService
  ) {

    console.log(navParams);
    this.lista = navParams.get('lista');
    this.index = navParams.get('index');

  }

  ngOnInit() {}


  actualizar( item:ListaItem ) {
    item.completado = !item.completado;

    this._listaDeseos.actualizarData();
  }

  borrarLista( lista:Lista, index:number ) {
    this._listaDeseos.borrarLista(lista, index);
    this.navCtrl.pop();
  }


}
