import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingChildModule } from './products-routing.module';

import { ProductsComponent } from './products.component';
import { PalosComponent } from './palos/palos.component';
import { PelotasComponent } from './pelotas/pelotas.component';
import { BolsosComponent } from './bolsos/bolsos.component';
import { CarrosComponent } from './carros/carros.component';
import { AccesoriosComponent } from './accesorios/accesorios.component';
import { ProductsViewComponent } from './shared/products-view/products-view.component';

import { ProductComponent } from './shared/product/product.component';

// PIPES
import { NombrePipe } from '../../pipes/nombre.pipe';
import { DetallesPipe } from '../../pipes/detalles.pipe';
import { PrecioPipe } from '../../pipes/precio.pipe';



@NgModule({
  declarations: [
    ProductsComponent,
    PalosComponent,
    PelotasComponent,
    BolsosComponent,
    CarrosComponent,
    AccesoriosComponent,
    ProductsViewComponent,
    ProductComponent,
    NombrePipe,
    DetallesPipe,
    PrecioPipe
  ],
  imports: [
    CommonModule,
    AppRoutingChildModule
  ]
})
export class ProductsModule { }
