import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url: string = 'https://luna-golf-store.firebaseio.com/marcas';

  constructor( private afs: AngularFirestore ){
  }

  getMarcas(){
    return this.afs.collection('marcas').valueChanges();
  }
}
