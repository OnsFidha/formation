import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
form:FormGroup;
match:any={};
  constructor(private f:FormBuilder) { }
 
  ngOnInit(): void {
    this.form=this.f.group({
      t1:[''],
      t2:[''],
      s1:[''],
      s2:['']
    })

  }
  addF(){
    console.log(this.match)
      let matcheId=JSON.parse(localStorage.getItem("matcheId")|| '1')
      let matches=JSON.parse(localStorage.getItem("matches")|| '[]')
      this.match.id=matcheId
      matches.push(this.match)
      localStorage.setItem("matches",JSON.stringify(matches))
      localStorage.setItem("matcheId",JSON.stringify(matcheId+1))


  }

}
