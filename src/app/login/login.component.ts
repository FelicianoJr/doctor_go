import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User = new User();
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  todoLogin(){
    console.log("passou aki")
    this.authService.logar(this.user);
  }
}
