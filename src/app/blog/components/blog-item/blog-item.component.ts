import { Component } from '@angular/core';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent {
  constructor(private blogService: BlogService){
  }

  getListOfBlog(){
    return this.blogService.getListOfBlog()
  }
  
}
