import { Component } from '@angular/core';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {
  constructor(private bookService: BookService){
  }
  getListOfBooks(){
    return this.bookService.getListOfBooks();
  }
 
  edit(id:number){
    
  }
  delete(id:number){
    // return this.bookService.deleteElementById(id)
  }
}
