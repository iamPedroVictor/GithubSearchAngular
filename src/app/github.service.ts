import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  url = `https://api.github.com/users/{0}/repos`;

  constructor(private http: HttpClient) { }

  public getRepositories(username: string): Observable<any[]> {
    const url = `https://api.github.com/users/${username}/repos`;
    console.log(url);
    return this.http.get<any[]>(`https://api.github.com/users/${username}/repos`);
  }

}
