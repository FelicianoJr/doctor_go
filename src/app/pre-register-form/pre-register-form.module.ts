import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { PreRegisterFormComponent } from './pre-register-form.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [PreRegisterFormComponent]
})
export class PreRegisterFormModule { }
