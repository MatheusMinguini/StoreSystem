import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [LoginComponent],
  imports: [ ReactiveFormsModule, CommonModule],
})

export class LoginModule { }