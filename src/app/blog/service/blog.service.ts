import { Injectable } from '@angular/core';

export interface Blog {
  id: number;
  title: string;
  description: string;
  author: string;
  comments: string[];
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  arrBlog:Blog [] = [
    {
      id: 1,
      title: 'Title 1',
      description: 'Description 1',
      author: 'Author 1',
      comments: ['Good', 'Great']
    },
    {
      id: 2,
      title: 'Title 2',
      description: 'Description 2',
      author: 'Author 2',
      comments: ['Very good', 'Nice']
    },
    {
      id: 3,
      title: 'Title 3',
      description: 'Description 3',
      author: 'Author 3',
      comments: ['Awesome', 'Cool']
    }
  ]
  getListOfBlog(){
    return this.arrBlog;
  }
  constructor() { }
}
