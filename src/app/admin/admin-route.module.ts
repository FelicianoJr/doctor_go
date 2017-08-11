import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './view/payment.component';
import { AdminComponent } from './admin.component';
import { MyClientComponent} from './view/my-client.component';
import { ClientDetailComponent } from './view/client-detail.component';
import { ClientGuardService } from './guard/client-guard.service';

const adminRoutes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {path:'payment',component:PaymentComponent},
      {path:'my-client',component:MyClientComponent,
      children:[
        {path:':id', component:ClientDetailComponent,
        resolve: { client : ClientGuardService }}
      ]},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports:[
    RouterModule
  ]

})
export class AdminRouteModule { }
