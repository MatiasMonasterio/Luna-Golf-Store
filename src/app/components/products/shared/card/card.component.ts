import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../../../interface/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() producto: Producto;

  constructor( private router: Router ){

  }

  ngOnInit() {
  }

  // ABRE UNA NUEVA PESTAÑA ENVIANDO EL ID DEL PRODUCTO COMO PARAMETRO
  productTab(id: string){
    this.router.navigate(['/producto', id]);
  }

}
