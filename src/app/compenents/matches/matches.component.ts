import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches:any
  name="matches"

  constructor() { }

  ngOnInit(): void {
    this.matches=JSON.parse(localStorage.getItem("matches"))
    
  
  }
  update(id:any){
    this.matches=id;
  }
}

