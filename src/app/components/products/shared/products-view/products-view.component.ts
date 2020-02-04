import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Producto } from '../../../../interface/producto';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.scss']
})
export class ProductsViewComponent implements OnInit, OnDestroy {

  productos: Array<Producto> = [];
  index: number;
  limitProduct: boolean = false;
  path: string;
  categoria: string;
  productosSubscription: Subscription;
  load: boolean = true;
  btnDisabled: boolean;

  constructor( private _ps: ProductsService, private router: Router ){
    this.indentificarPath();
    this.primeraVez();
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    if(!window.location.pathname.includes('producto/')){
      this._ps.getProductos(this.categoria, true);
      this.productosSubscription.unsubscribe();
    }
  }

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

  primeraVez(){
    if(this._ps.productos.length === 0) this.obtenerData();
    else {
      this.productos = this._ps.productos;
      this.index = this.productos.length;
    }
  }

  indentificarPath(){
    this.path = window.location.pathname;

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
  }

  productTab(id: string){
    this.router.navigate(['/producto', id]);
  }

}
