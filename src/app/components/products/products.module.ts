import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingChildModule } from './products-routing.module';

import { ProductsComponent } from './products.component';
import { PalosComponent } from './palos/palos.component';
import { PelotasComponent } from './pelotas/pelotas.component';
import { BolsosComponent } from './bolsos/bolsos.component';
import { CarrosComponent } from './carros/carros.component';
import { AccesoriosComponent } from './accesorios/accesorios.component';



@NgModule({
  declarations: [
    ProductsComponent,
    PalosComponent,
    PelotasComponent,
    BolsosComponent,
    CarrosComponent,
    AccesoriosComponent
  ],
  imports: [
    CommonModule,
    AppRoutingChildModule
  ]
})
export class ProductsModule { }
