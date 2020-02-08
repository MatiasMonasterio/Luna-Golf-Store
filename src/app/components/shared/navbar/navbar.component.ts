import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, DoCheck {

  show: boolean = false;
  dropdownMenu: boolean = false;
  scrollResponsive: boolean;
  path: string;
  product: boolean;
  showDropdownDokstop: boolean;
  body: HTMLElement;

  logo: HTMLElement;

  constructor(){
  }

  ngOnInit() {
    this.logo = document.querySelector('#logo');
    this.scrollNav();
    this.checkPath();
    this.closeSidenavBg();

    this.body = document.body;

  }

  ngDoCheck(){
    if( this.path !== window.location.pathname ) this.checkPath();
  }

  // MUESTRA/ OCULTA EL SIDE NAV
  showSideNav(){
    this.show = !this.show;
    this.dropdownMenu = false;

    if(this.show) this.body.style.overflowY = 'hidden'
    else this.body.style.overflowY = 'scroll'
  }

  // MUESTRA/ OCULTA EL DROPDOWN MENU
  showDropdownMenu(){
    this.dropdownMenu = !this.dropdownMenu;
  }

  // CAMBIAR TAMAÑO DEL NAV AL REALIZAR SCROLL
  scrollNav(){
    let self = this;
    window.onscroll = function(){
      if(window.scrollY >= 10) {
        self.scrollResponsive = true;
        self.logo.style.width = '110px';
      }
      else {
        self.scrollResponsive = false;
        self.logo.style.width = '150px';
      }
    } 
  }

  // CAMBIAR DISEÑO NAV SI ESTA EN EL PATH PRODUCTOS RESPONSIVE
  checkPath(){
    this.path = window.location.pathname;
    if( this.path.includes( '/productos/' )) this.product = true;
    else this.product = false;
  }

  // MUESTRA/ OCULTA EL DROP DOWN EN NAV DOKSTOP
  showDropdown(show: boolean){
    if( show ) this.showDropdownDokstop = true;
    else this.showDropdownDokstop = false;

    console.log('entro')
  }

  // CERRAR EL SIDENAV CUANDO SE HAGA CLICK FUERA DEL SIDENAV
  closeSidenavBg(){
    document.addEventListener('click',(e)=>{
      if((<HTMLElement>e.target).id === 'bg-sidenav') this.showSideNav();
    })
  }

}
