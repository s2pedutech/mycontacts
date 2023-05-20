import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    "email" : new FormControl(''),
    "password" : new FormControl()
  });

  constructor(private auth:AuthService, private router:Router){}
  login(){
    console.log(this.loginForm.value);
    // call the login function from auth service
    this.auth.login(this.loginForm.value).subscribe(success => {
      console.log("Login successful", success);
      let data:any = success;
      let id = data.data.id;
      let token = data.data.token;
      // store the id and token in localstorage
      localStorage.setItem("id2",id);
      localStorage.setItem("token2",token);
      this.router.navigate(['/contacts'])
      
    },
      error => {
        console.log("Error in login",error);
        
      })
  }
}
