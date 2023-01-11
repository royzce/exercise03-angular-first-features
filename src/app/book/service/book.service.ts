import { Injectable } from '@angular/core';

export interface Book {
  id: number;
  name: string;
  authors: string[];
  isbn: string;
}

@Injectable({
  providedIn: 'root'
})

export class BookService {
  arrBooks: Book[] = [
    {
      id: 1,
      name: 'Book 1',
      authors: ['James K.'],
      isbn: 'isbn 1'
    },
    {
      id: 2,
      name: 'Book 2',
      authors: ['Lebron I.', 'Stephen K.', 'Loonie K.'],
      isbn: 'isbn 2'
    },
    {
      id: 3,
      name: 'Book 3',
      authors: ['Kevin F.', 'Terence J.'],
      isbn: 'isbn 3'
    }
  ];

  getListOfBooks(){
    return this.arrBooks;
  }
  deleteElementById(id:number):void {
    this.arrBooks.splice(id, 1);
  }
  constructor() { }

}
