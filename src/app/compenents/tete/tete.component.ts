import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tete',
  templateUrl: './tete.component.html',
  styleUrls: ['./tete.component.css']
})
export class TeteComponent implements OnInit {
@Input() titre:string
  constructor() { }

  ngOnInit(): void {
  }

}
