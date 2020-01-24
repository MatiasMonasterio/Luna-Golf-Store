import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from './home.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  marcas: Array<any> = [];
  carousel: HTMLElement;
  marcasObservable: Subscription;

  map1: boolean = false;
  map2: boolean = false;

  constructor( private _hs: HomeService ){
  }

  ngOnInit() {
    this.carousel = document.querySelector('#carousel-container');
    this.obtenerMarcas();
  }

  // 
  ngOnDestroy(){
    this.marcasObservable.unsubscribe();
  }

  // OBTIENE INFORMACION DE LAS MARCAS DESDE FIREBASE
  obtenerMarcas(){
     this.marcasObservable = this._hs.getMarcas()
      .subscribe(resp=>{
        this.marcas = resp;
        this.mostrarMarcas()
      })
  }

  // CREAR ELEMENTOS DOM PARA MOSTRAR INFORMACION DE MARCAS
  mostrarMarcas(){

    for(let i=0; i< this.marcas.length; i++){
      if( i%10 === 0){
        let nodo = document.createElement('div');

        if(i === 0) nodo.setAttribute('class', 'carousel-item active');
        else nodo.setAttribute('class','carousel-item');

        let row = document.createElement('div');
        row.setAttribute('class','row');
        nodo.appendChild(row);

        this.carousel.appendChild(nodo);
      }
      if( i %5 === 0 ){
        let breaken = document.createElement('div');
        breaken.setAttribute('class','w-100 d-none d-md-block');

        this.carousel.lastChild.firstChild.appendChild(breaken);
      }

      let contenedor = document.createElement('div');
      contenedor.setAttribute('style','{height: 120px;}');
      contenedor.setAttribute('class','col-6 col-md marca d-flex align-items-center');
      let img = document.createElement('img');
      img.setAttribute( 'src', this.marcas[i].img );
      img.setAttribute('alt', this.marcas[i].nombre );
      img.setAttribute('class', 'img-fluid marca-img' );
      contenedor.appendChild(img);

      this.carousel.lastChild.firstChild.appendChild(contenedor);
    }
  }

  showMap(id: number){
    if( id === 1 ) this.map1 = !this.map1;
    else this.map2 = !this.map2;
  }

}
