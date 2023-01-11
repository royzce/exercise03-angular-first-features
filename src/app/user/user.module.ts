import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
