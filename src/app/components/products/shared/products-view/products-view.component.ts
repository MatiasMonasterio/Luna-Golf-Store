import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Producto } from '../../../../interface/producto';
import { Subscription } from 'rxjs';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { KeepPositionService } from './keep-position.service';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.scss']
})
export class ProductsViewComponent implements OnInit, OnDestroy, AfterViewInit {

  productos: Array<Producto> = [];
  index: number;
  limitProduct: boolean = false;
  path: string;
  categoria: string;
  productosSubscription: Subscription;
  load: boolean = true;
  btnDisabled: boolean;
  keepData: boolean = false;
  RouterEventSubscription: Subscription;

  constructor( private _ps: ProductsService, private router: Router, private kp: KeepPositionService ){

    this.routeEvent();
  }

  ngOnInit(){
  }

  ngAfterViewInit(){
    this.checkPosition();
  }

  ngOnDestroy(){

    if(!this.keepData){
      this.kp.positionRouter = undefined;
      this._ps.getProductos(this.categoria, true)
    };

    if( this.productosSubscription !== undefined){
      this.productosSubscription.unsubscribe();
    }

    if( this.RouterEventSubscription !== undefined ){
      this.RouterEventSubscription.unsubscribe();
    }
  }

  // TRAE LISTA DE PRODUCTOS SEGUN LA CATEGORIA QUE ESTE SELECCIONADA
  obtenerData(){
    this.productosSubscription = this._ps.getProductos( this.categoria )
      .subscribe(
        resp =>{

        this.btnDisabled = true;
        if(this.index === resp.length){
          this.obtenerData();
        }

        this.productos = resp;
        this.limitProduct = this._ps.limit;
        this.index = this.productos.length;
        this.load = false;
        this.btnDisabled = false;
        })
  }

  // DETERMINA SI HAY QUE TRAER LA INFO DEL SERVICIO O REALIZAR UNA PETICION AJAX
  primeraVez(){
    if(this._ps.productos.length === 0) this.obtenerData();
    else {
      this.productos = this._ps.productos;
      this.index = this.productos.length;
      this.load = false;
    }
  }

  // INTENTIFICA QUE CATEGORIA ESTAMOS UBICADOS
  indentificarPath(){

    switch(this.path){
      case '/productos/palos':
        this.categoria = 'palos';
        break;
      case '/productos/pelotas':
        this.categoria = 'pelotas';
        break;
      case '/productos/bolsos':
        this.categoria = 'bolsos';
        break;
      case '/productos/carros':
        this.categoria = 'carros';
        break;
      case '/productos/ropa-accesorios':
        this.categoria = 'accesorios';
        break;
      default:
        break;
    }
    this.primeraVez();
  }

  // IDENTIFICA EL PATH ACTUAL Y AL QUE SE VA A CAMBIAR
  routeEvent(){
    this.RouterEventSubscription = this.router.events.subscribe( e => {

      if( e instanceof NavigationStart){
        
        if(e.url.includes('/producto/')) {
          this.keepData = true;
          this.kp.positionRouter = window.scrollY;
        }
      }

      if( e instanceof NavigationEnd ){
        this.path = e.url;
        this.indentificarPath()
      }

    })
  }

  checkPosition(){
    console.log(this.kp.positionRouter);
    if( this.kp.positionRouter !== undefined ) window.scrollTo( 0, this.kp.positionRouter );
  }

}
