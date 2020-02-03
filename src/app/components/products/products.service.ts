import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Producto } from '../../interface/producto';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productos: Array<Producto> = [];
  indicador: number;
  limit: boolean = false;

  constructor( private afs: AngularFirestore ){
  }

  // OBTENER UN SOLO PRODUCTO POR SU ID

  // OBTENER TODOS LOS PRODUCTOS POR CATEGORÍA
  getProductos(categoria: string, destroy: boolean = false): Observable<any>{
    if(destroy){
      this.indicador = undefined;
      this.productos = [];
      this.limit = false;
      return;
    }

    let i:number = this.indicador | 0;

    return this.afs.collection( 'productos' ).valueChanges()
      .pipe( 
        map(( resp: Array<Producto> ): Array<Producto> =>{

          for( i; i< resp.length; i++){
            if( resp[i].categoria === categoria ) this.productos.push(resp[i]);
            if( this.productos.length%8 === 0 && this.productos.length != 0){

              this.indicador = i + 1;
              return this.productos;
            }
          }
 
          this.limit = true;
          return this.productos;
        })
      );
  }
}
