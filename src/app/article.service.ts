import { Injectable } from '@angular/core';
import { Article } from './article';
import { ARTICLES } from './Aricle-data';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  static getArticles(): Article[] {
    return ARTICLES;  
  }
  


  constructor() { }
}
