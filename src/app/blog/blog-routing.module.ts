import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BlogItemComponent
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
export class BlogRoutingModule { }
