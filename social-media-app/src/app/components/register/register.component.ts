import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string = "";
  password: string = "";
  firstName: string = "";
  lastName: string = "";
  email: string = "";

  registerFailed: boolean = false;

  constructor(public activeModal: NgbActiveModal, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  register(): void {
    this.userService.register({
      username: this.username, 
      password: this.password, 
      userFirstName: this.firstName, 
      userLastName: this.lastName, 
      userEmail: this.email,
      userProfileImage: 'https://scontent-hou1-1.xx.fbcdn.net/v/t1.30497-1/cp0/p40x40/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=VdpPN8FSR2cAX-ac4fG&_nc_ht=scontent-hou1-1.xx&oh=a5997c335a69061c2b2c8efb5172ec74&oe=61610723'
    }).subscribe((res) => {
      if (res.success){
      sessionStorage.setItem('loggedInUser', JSON.stringify(res.data))
      this.router.navigateByUrl('/home')
    } else {
      this.registerFailed = true
    }
  })
    this.activeModal.close();
  }
}
