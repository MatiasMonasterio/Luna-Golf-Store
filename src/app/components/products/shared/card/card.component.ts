import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../../../interface/producto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() producto: Producto;

  constructor() { }

  ngOnInit() {
    console.log(this.producto)
  }

}
