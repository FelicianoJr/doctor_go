import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyClientComponent } from './view/my-client.component';
import { ClientDetailComponent } from './view/client-detail.component';
import { PaymentComponent } from './view/payment.component';
import { AdminComponent } from './admin.component';
import { AdminRouteModule } from './admin-route.module';
import { ClientService } from './service/client.service';
import { ClientGuardService } from './guard/client-guard.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRouteModule
  ],
  declarations: [
    AdminComponent,
    MyClientComponent,
    PaymentComponent,
    ClientDetailComponent
  ],providers: [
    ClientService,ClientGuardService
  ]
})
export class AdminModule { }
