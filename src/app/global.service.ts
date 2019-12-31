import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  id: number ;

  setId(userId: number){
    this.id = userId ;
  }

  getId(){
    return this.id ;
  }

  constructor() { }
}
