import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookItemComponent } from './components/book-item/book-item.component';

const routes: Routes = [
  {
    path: '',
    component: BookItemComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BookRoutingModule { }
