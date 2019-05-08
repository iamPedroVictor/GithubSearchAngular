import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  url = `https://api.github.com/users/{0}/repos`;
  static searchedRepositories = new EventEmitter<any[]>();
  constructor(private http: HttpClient) { }

  public getRepositories(username: string) {
    let repositories = this.http.get<any[]>(`https://api.github.com/users/${username}/repos`);
    repositories.subscribe(
      response => GithubService.searchedRepositories.emit(response)
    );
  }

}
