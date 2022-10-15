import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }
matches:any=[]
name="admin"
  ngOnInit(): void {;
    this.matches=JSON.parse(localStorage.getItem('matches'||'[]'))
  }
  ondelete(id:any){
    let pos
    for (const i in this.matches) {
      if (this.matches[i].id==id) {
        pos =i
      }
    }
    this.matches.splice(pos,1)
    localStorage.setItem('matches',JSON.stringify(this.matches))
  
  }
}
