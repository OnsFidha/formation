import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
matches:any


  constructor() { }

  ngOnInit(): void {
    this.matches=JSON.parse(localStorage.getItem("matches"))
    
  
  }
  update(id:any){
    this.matches=id;
  }
}
