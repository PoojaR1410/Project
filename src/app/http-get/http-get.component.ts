import { Component, OnInit } from '@angular/core';
import { repos } from './repos';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-http-get',
  templateUrl: './http-get.component.html',
  styleUrls: ['./http-get.component.css']
})
export class HttpGetComponent implements OnInit {
  title:string='httpGet';
  userName: string = "pooja"
  repos!: repos[];
 
  loading: boolean = false;
  errorMessage: any;

  constructor(private githubService: GithubService) {
  }

  public getRepos() {
    this.loading = true;
    this.errorMessage = "";
    this.githubService.getRepos(this.userName)
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.repos = response; 
        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        () => {                                   //complete() callback
          console.error('Request completed')      //This is actually not needed 
          this.loading = false; 
        })
  }

  ngOnInit(): void {
  }

}
