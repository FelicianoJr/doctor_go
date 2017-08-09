import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router,CanLoad } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class GuardService implements CanActivate,CanLoad{

  constructor(private authService:AuthService,private router:Router) { }

  canActivate(route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot):Observable<boolean> | boolean{

      return this.isPermissao();
    }

    private isPermissao(){
      if(this.authService.validationAcess()){
        return true;
      }
      this.router.navigate(['/login']);
      return false;
    }

    canLoad(route:Router):Observable<boolean>|Promise<boolean>|boolean{
      return this.isPermissao();
    }
  }
