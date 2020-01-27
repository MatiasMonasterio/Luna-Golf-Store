import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  alert: boolean;
  path: string;
  categoriaSeleccionada: string;
  btnClose: HTMLElement;
  navResponsiveOpen: boolean = false;

  constructor(){
  }

  ngOnInit() {
    this.path = window.location.pathname;
    this.checkearUrl();
    this.btnClose = document.querySelector('#btn-nav');

    document.addEventListener('click', (e)=>{
      this.path = window.location.pathname;
      this.checkearUrl();
    })
  }

  checkearUrl(){
    if( this.path == '/productos' ) this.alert = true;
    else this.alert = false;


    switch(this.path){
      case '/productos/palos':
        this.categoriaSeleccionada = 'Palos';
        break;
      case '/productos/pelotas':
        this.categoriaSeleccionada = 'Pelotas';
        break;
      case '/productos/bolsos':
        this.categoriaSeleccionada = 'Bolsos';
        break;
      case '/productos/carros':
        this.categoriaSeleccionada = 'Carros';
        break;
      case '/productos/ropa-accesorios':
        this.categoriaSeleccionada = 'Ropa y accesorios';
        break;
      default:
        this.categoriaSeleccionada = 'Seleccionar categoría';
        break;
    }
  }

  showNav(){
    this.navResponsiveOpen = !this.navResponsiveOpen;
  }

  closeNav(){
    if(window.innerWidth < 768){
      this.btnClose.click();
    }
  }

}
