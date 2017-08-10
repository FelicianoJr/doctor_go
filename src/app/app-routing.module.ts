import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { GuardService } from './guards/guard.service';
import { HomeComponent} from './home/home.component';
import { PreRegisterFormComponent } from './pre-register-form/pre-register-form.component';


const routes: Routes = [
  { path: 'login',component:LoginComponent},
  { path: 'home', component: HomeComponent,
  canActivate: [GuardService],
  canLoad: [GuardService]
},
{ path: 'pre-register',component:PreRegisterFormComponent},
{ path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
