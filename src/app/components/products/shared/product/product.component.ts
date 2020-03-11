import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../products.service';
import { Producto } from '../../../../interface/producto';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  producto: Producto = {
    nombre: '',
    precio: '',
    id: '',
    imgUrl: '',
    detalles: '',
    categoria: ''
  };

  relacionados: Array<Producto> = [];
  routerSubscription: Subscription;

  constructor( private ar: ActivatedRoute, private _ps: ProductsService, private router: Router, private ngs: NgxSpinnerService){
    this.getParameter();
    this.routerNavigat();
  }

  ngOnInit() {
    this.ngs.show();
  }

  ngOnDestroy(){
    if( this.routerSubscription !== undefined ) this.routerSubscription.unsubscribe();
  }

  // OBTIENE EL ID DEL PRODUTO DESDE LOS PARAMETROS DE LA URL
  getParameter(){
    this.ar.params.subscribe( valor=>{
      this.getProduct( valor['id'] );
    })
  }

  // TRAE EL PRODUCTO CON EL ID OBTENDIO
  getProduct( id: string ){
    this._ps.getProduct(id)
      .subscribe(resp=>{
        this.producto = resp;
        this.createProductosRelacionados();
        this.ngs.hide();
      })
  }

  // ARRAY CON 4 PRODUCTOS CUALESQUIERA
  createProductosRelacionados(){
    for( let i = 0 ; i < 4 ; i++ ){
      this.relacionados.push(this.producto);
    }
  }

  // VERIFICA SI SE NAVEGA ENTRE LOS RELACIONADOS O SE VEULVE PARA ATRAS PARA 
  // CONSERVAR O ELIMINAR LA INFORMACION DEL PRODUCT-VIEW
  routerNavigat(){
    this.routerSubscription = this.router.events.subscribe((e)=>{
      if(e instanceof NavigationStart){
        if( !e.url.includes('/producto/') && e.navigationTrigger !== 'popstate'){
          this._ps.getProductos( 'categoria' , true );
        }
      }
    })
  }

}
