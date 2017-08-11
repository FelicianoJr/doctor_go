import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from './user';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User = new User();
  constructor(private authService:AuthService,private route:Router) { }

  ngOnInit() {
  }

  todoLogin(){

    this.authService.logar(this.user).subscribe(()=>{
      if(this.authService.isLoggedIn){
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl: '/';

        let navigationExtras : NavigationExtras = {
          queryParamsHandling : 'preserve',
          preserveFragment : true
        };
        this.route.navigate([redirect],navigationExtras);
      }
      });
  }

  logout(){

  }
}
