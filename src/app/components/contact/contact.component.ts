import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  mapSelected: boolean = true;
  map: HTMLElement;
  drivingUrl: string;
  countryUrl: string;

  constructor(){
    this.drivingUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13132.154058417675!2d-58.81474632340448!3d-34.62846698671816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1fea5c3f445e79e7!2sDriving%20Moreno!5e0!3m2!1ses!2sar!4v1577398824140!5m2!1ses!2sar';
    this.countryUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11048.471741813057!2d-58.84547881269017!3d-34.5856901644544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9437abeabf2b%3A0xd3205ac9847354cf!2sClub%20de%20Campo%20San%20Diego!5e0!3m2!1ses!2sar!4v1577404268165!5m2!1ses!2sar';
  }

  ngOnInit() {
    this.map = document.querySelector('#map')
  }

  selectMap(){
    this.mapSelected = !this.mapSelected
    if( this.mapSelected ){
      this.map.setAttribute('src', this.drivingUrl);
    }
    else this.map.setAttribute('src', this.countryUrl);
  }

}
