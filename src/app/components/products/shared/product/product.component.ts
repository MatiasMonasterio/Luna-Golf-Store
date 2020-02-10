import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../products.service';
import { Producto } from '../../../../interface/producto';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  producto: Producto = {
    nombre: '',
    precio: '',
    id: '',
    imgUrl: '',
    detalles: '',
    categoria: ''
  };

  relacionados: Array<Producto> = [];

  constructor( private ar: ActivatedRoute, private _ps: ProductsService ){
    this.getParameter();
  }

  ngOnInit() {
  }

  getParameter(){
    this.ar.params.subscribe( valor=>{
      this.getProduct( valor['id'] );
    })
  }

  getProduct( id: string ){
    this._ps.getProduct(id)
      .subscribe(resp=>{
        this.producto = resp;
        this.createProductosRelacionados();
      })
  }

  createProductosRelacionados(){
    for( let i = 0 ; i < 4 ; i++ ){
      this.relacionados.push(this.producto);
    }

    console.log(this.relacionados);
  }

}
