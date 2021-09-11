import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
  }

  login(): void {
    this.userService.login({username: this.username, password: this.password})
  }
}
