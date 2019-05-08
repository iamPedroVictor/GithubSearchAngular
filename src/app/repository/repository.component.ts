import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  repository: Repository;
  constructor(private githubService: GithubService) { }

  ngOnInit() {
    GithubService.searchedRepositories.subscribe(
      repositories => {
        this.repository = new Repository(repositories[0]);
      }
    );
  }

}
