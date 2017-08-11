import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ClientService } from '../service/client.service';
import { Client } from '../model/client';

@Injectable()
export class ClientGuardService implements Resolve<Client>{

  constructor(private clientService: ClientService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {

    console.log('ClientGuardService');

    let id = route.params['id'];

    return this.clientService.getClient(id);
  }
}
