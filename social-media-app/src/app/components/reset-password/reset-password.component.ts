import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  password: string;
  token: string = '';
  user: User;

  constructor(private activedRoute: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      console.log(params)
      this.token = params['token']
      this.userService.getUserByResetToken(this.token).subscribe((user) => {
        this.user = user.data
      })
    })
  }

  changePassword(): void {
    if (this.password.length > 0){
      this.user.password = this.password
      this.userService.updatePassword(this.user).subscribe((res) => {
      if (res.success){
        sessionStorage.setItem('loggedInUser', JSON.stringify(this.user))
        this.router.navigateByUrl('/home')
      }
    })
    }
  }
}
