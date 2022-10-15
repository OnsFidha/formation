import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  fSign:FormGroup ; 
  Sign(obj:any){
    console.log(obj.value)
      }
  constructor(private formBuilder:FormBuilder) { }
  ngOnInit(): void {
   this.fSign= this.formBuilder.group({
    First:["",Validators.required,Validators.minLength(3)],
    Name:[""],
    Email:['',Validators.email],
    Password:['']
   })

 
  }

}
