import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductComponent } from './components/shared/product/product.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { path: 'nosotros', component: AboutComponent },
  { path: 'productos', loadChildren: ()=> import ('./components/products/products.module').then(m => m.ProductsModule) },
  { path: 'contacto', component: ContactComponent },
  { path: 'producto/:id', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
