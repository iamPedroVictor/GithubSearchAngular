import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  public Username: string;
  constructor() { }

  ngOnInit() {
  }

  public search(){
    alert('Foi chamado o metodo search');
    console.log(this.Username);
  }

}
