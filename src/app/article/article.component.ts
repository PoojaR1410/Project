import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor() { }
 articles!:Article[];
  getArticles()    
  {    
    this.articles=ArticleService.getArticles();
  }

    ngOnInit() {     
     this.getArticles()    
    }    




}
