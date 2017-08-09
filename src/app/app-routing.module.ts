import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { GuardService } from './guards/guard.service';
import { HomeComponent} from './home/home.component';


const routes: Routes = [
  { path: 'login',component:LoginComponent},
  { path: 'home', component: HomeComponent,
        canActivate: [GuardService],
        canLoad: [GuardService]
    },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
