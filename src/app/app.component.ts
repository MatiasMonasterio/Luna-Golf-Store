import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'LunaGolfStore';

  upBtn: boolean = false;

  constructor(){
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 800 ) this.upBtn = true ;
      else this.upBtn = false;
    })
  }

  up(){
    window.scroll( 0, 0 );
  }
}
