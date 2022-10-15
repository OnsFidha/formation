import { Component, EventEmitter, Input, OnInit, Output,  } from '@angular/core';


@Component({
  selector: 'app-matche',
  templateUrl: './matche.component.html',
  styleUrls: ['./matche.component.css']
})
export class MatcheComponent implements OnInit {
  @Input() t:any
  @Output() sup= new EventEmitter<any>();
 style:string
  constructor() { }

  ngOnInit(): void {
    console.log(this.t)
    
  }
  delete(id:any){
    let pos
    let matches=JSON.parse(localStorage.getItem("matches"))
    for (const i in matches) {
      if (matches[i].id==id) {
        pos =i
      }
    }
    matches.splice(pos,1)
    localStorage.setItem('matches',JSON.stringify(matches))
    this.sup.emit(matches)
  
  }
  compare(a:any,b:any){
    if (a>b) {
      return ["green","win"]
    } else if (b>a) {
      return ["red","lost"]
    } else {
      return ["yellow","tie"]
    }
  }

}
