import { Injectable,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';

@Injectable()
export class AuthService {

  private autenticado:boolean = false;
  showEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  logar(user:User){
    if(user.name === 'felix'){
      this.autenticado = true;
      this.showEmitter.emit(true);
      this.router.navigate(['/']);
    }else{
      this.autenticado = false;
      this.showEmitter.emit(false);
    }
  }

  validationAcess(){
    return this.autenticado;
  }

}
