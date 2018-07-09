import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
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
    private _listaDeseos:ListaDeseosService,
    private alertCtrl:AlertController
  ) {

    console.log(navParams);
    this.lista = navParams.get('lista');
    this.index = navParams.get('index');

  }

  ngOnInit() {}


  actualizar( item:ListaItem ) {
    item.completado = !item.completado;

    let todosMarcados = true;
    for(let item of this.lista.items) {
      if (!item.completado) {
          todosMarcados = false;
          break;
      }
    }

    this.lista.terminada = todosMarcados;

    this._listaDeseos.actualizarData();
  }


  borrarLista( lista:Lista, index:number ) {
    const confirm = this.alertCtrl.create({
      title: 'Borrar Lista',
      message: 'Esta seguro de querer eliminar esta lista?',
      buttons: [
        { text: 'Cancelar' },
        {
          text: 'Eliminar',
          handler: () => {
            // console.log('Agree clicked');
            this._listaDeseos.borrarLista(lista, index);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }


}
