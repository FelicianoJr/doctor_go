import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { GuardService } from './guards/guard.service';
import { HomeComponent} from './home/home.component';
import { ClientComponent } from './client/client.component';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
  {path:'admin',
    loadChildren:'app/admin/admin.module#AdminModule',

  },
  { path: 'login',component:LoginComponent},
  { path: 'home', component: HomeComponent,
  canActivate: [GuardService],
  canLoad: [GuardService]
},
{ path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{useHash: true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
