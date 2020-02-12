import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// RUTAS
import { AppRoutingChildModule } from './products-routing.module';

// COMPONENTES
import { ProductsComponent } from './products.component';
import { PalosComponent } from './palos/palos.component';
import { PelotasComponent } from './pelotas/pelotas.component';
import { BolsosComponent } from './bolsos/bolsos.component';
import { CarrosComponent } from './carros/carros.component';
import { AccesoriosComponent } from './accesorios/accesorios.component';

// COMPONENTES COMPARTIDOS
import { ProductComponent } from './shared/product/product.component';
import { ProductsViewComponent } from './shared/products-view/products-view.component';
import { CardComponent } from './shared/card/card.component';

// PIPES
import { NombrePipe } from '../../pipes/nombre.pipe';
import { DetallesPipe } from '../../pipes/detalles.pipe';
import { PrecioPipe } from '../../pipes/precio.pipe';
import { ModalComponent } from './shared/modal/modal.component';
import { CuotasPipe } from '../../pipes/cuotas.pipe';


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
    PrecioPipe,
    CardComponent,
    ModalComponent,
    CuotasPipe
  ],
  imports: [
    CommonModule,
    AppRoutingChildModule
  ]
})
export class ProductsModule { }
