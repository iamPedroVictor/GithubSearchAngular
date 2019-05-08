import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  public Username: string;
  constructor(private githubService: GithubService) { }
  public repositories: any[] = [];
  ngOnInit() {
  }

  public search(){
    this.githubService.getRepositories(this.Username).subscribe(
      response => {
        this.repositories = response;
      }
    );
  }

}
