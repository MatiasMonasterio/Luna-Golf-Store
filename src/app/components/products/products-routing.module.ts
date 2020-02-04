import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { PalosComponent } from './palos/palos.component';
import { PelotasComponent } from './pelotas/pelotas.component';
import { BolsosComponent } from './bolsos/bolsos.component';
import { CarrosComponent } from './carros/carros.component';
import { AccesoriosComponent } from './accesorios/accesorios.component';

import { ProductComponent } from './shared/product/product.component'

const routes: Routes = [
    { path: '', component: ProductsComponent, children:[
        { path: 'palos', component: PalosComponent },
        { path: 'pelotas', component: PelotasComponent },
        { path: 'bolsos', component: BolsosComponent },
        { path: 'carros', component: CarrosComponent },
        { path: 'ropa-accesorios', component: AccesoriosComponent }
    ]},
    { path: 'producto/:id', component: ProductComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class AppRoutingChildModule {}
