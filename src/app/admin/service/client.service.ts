import { Injectable } from '@angular/core';
import { Client } from '../model/client';

@Injectable()
export class ClientService {

  private clients: Client[] = [
    {id: 1, name: 'Cliente 01', email: 'cliente01@email.com'},
    {id: 2, name: 'Cliente 02', email: 'cliente02@email.com'},
    {id: 3, name: 'Cliente 03', email: 'cliente03@email.com'}
  ];

  getClients(){
      return this.clients;
    }

    getClient(id: number){
      for (let i=0; i<this.clients.length; i++){
        let clin = this.clients[i];
        if (clin.id == id){
          return clin;
        }
      }
      return null;
    }


  constructor() {  }
}
