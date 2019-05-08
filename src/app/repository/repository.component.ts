import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  repositories: Repository[] = [];
  show: boolean = false;
  constructor(private githubService: GithubService) { }

  ngOnInit() {
    GithubService.searchedRepositories.subscribe(
      repositories => {
        repositories.map( repository => {
          this.repositories.push(new Repository(repository));
        });
        this.show = true;
        console.log(this.repositories[0].language);
      }
    );
  }

}
