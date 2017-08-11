import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Client } from './client';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit,OnDestroy {

  client: Client;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit() {
      console.log('ngOnInit: ClientDetalheComponent');

      this.inscricao = this.route.data.subscribe(
        (info: {client: Client}) => {
          console.log('Recebendo o obj Cleint do resolver');
          this.client = info.client;
        }
      );
    }
  
    ngOnDestroy(){
       this.inscricao.unsubscribe();
   }
  }
