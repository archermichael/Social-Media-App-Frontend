import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  loginFailed: boolean = false;

  constructor(private userService: UserService, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    
  }

  login(): void {
    sessionStorage.setItem('username', this.username)
    this.userService.login({username: this.username, password: this.password}).subscribe((res) => {
      if (res.success){
        sessionStorage.setItem('loggedInUser', JSON.stringify(res.data))
        this.router.navigateByUrl('/home')
      } else {
        this.loginFailed = true
      }
    })
  }

  forgotPassword(): void {
    this.modalService.open(ForgotPasswordComponent, { centered: true, size: 'sm' })
  }
}
