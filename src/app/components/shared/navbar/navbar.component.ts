import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  show: boolean = false;
  dropdownMenu: boolean = false;
  scrollResponsive: boolean;

  logo: HTMLElement;

  constructor() { }

  ngOnInit() {
    this.logo = document.querySelector('#logo');
    this.scrollNav();
  }

  // MUESTRA/ OCULTA EL SIDE NAV
  showSideNav(){
    this.show = !this.show;
    this.dropdownMenu = false;
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

}
