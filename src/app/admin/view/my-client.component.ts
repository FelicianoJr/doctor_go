import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { ClientService } from './client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template:
  `<div class="row">
  <div class="col s6">
  <p>
  Lista de clientes
  </p>
  <div class="collection">
  <a class="collection-item"
  *ngFor="let client of clients"
  [routerLink]="[client.id]">
  {{ client.name }}
  </a>
  </div>
  </div>

  <div class="col s6">
  <router-outlet></router-outlet>
  </div>
  </div>
  `
})
export class MyClientComponent implements OnInit {

  private clients: any[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clients = this.clientService.getClients();
  }


}
