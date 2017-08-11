import { Injectable,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {

  private autenticado:boolean = false;
  showEmitter = new EventEmitter<boolean>();
  redirectUrl: string;
  constructor(private router: Router) { }


  logar(user:User): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => this.autenticado = true);
  }
  // }{
  //   if(user.name === 'felix'){
  //     this.autenticado = true;
  //     this.showEmitter.emit(true);
  //     this.router.navigate(['/']);
  //   }else{
  //     this.autenticado = false;
  //     this.showEmitter.emit(false);
  //   }
  // }

  isLoggedIn(){
    return this.autenticado;
  }

  logout(){
    this.autenticado = false;
  }

}
