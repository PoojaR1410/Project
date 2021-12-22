import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { repos } from './http-get/repos';
@Injectable({
  providedIn: 'root'
})
export class GithubService {


  baseURL: string = "assets/data.json";
  constructor(private http: HttpClient) {
  }
  getRepos(userName: string): Observable<repos[]>{  
    return this.http.get<repos[]>(this. baseURL);  
  }
}
