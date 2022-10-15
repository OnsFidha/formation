import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-players',
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.css']
})
export class AddPlayersComponent implements OnInit {
  form:FormGroup;
  players:any={};
  constructor(private f:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.f.group({
      nom:[''],
      prenom:[''],
      role:[''],
      num:['']
    })
  }
  addP(){
    console.log(this.players)
      let pId=JSON.parse(localStorage.getItem("playerId")|| '1')
      let p=JSON.parse(localStorage.getItem("players")|| '[]')
      this.players.id=pId
      p.push(this.players)
      localStorage.setItem("players",JSON.stringify(p))
      localStorage.setItem("playerId",JSON.stringify(pId+1))


  }

}
