import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { PreRegisterFormModule} from './pre-register-form/pre-register-form.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { GuardService } from './guards/guard.service';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    PreRegisterFormModule
  ],
  providers: [AuthService,GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
