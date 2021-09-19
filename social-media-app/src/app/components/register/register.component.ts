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

  alerts: string[] = [];
  hideAlert: boolean = true;

  registerFailed: boolean = false;

  constructor(public activeModal: NgbActiveModal, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  register(): void {
    if (this.username.length < 2){
      this.alerts.push("Username must be at least 3 characters") 
    }
    if (this.password.length < 8){
      this.alerts.push("Password must be at least 8 characters")
    }
    if (this.firstName.length <= 2){
      this.alerts.push("You must provide your full first name")
    }
    if (this.lastName.length <= 2){
      this.alerts.push("You must provide your full last name")
    }
    if (this.email.length <= 4){
      this.alerts.push("You must provide an email address")
    }
    if (this.alerts.length == 0){
      this.userService.register({
        username: this.username, 
        password: this.password, 
        userFirstName: this.firstName, 
        userLastName: this.lastName, 
        userEmail: this.email,
        userProfileImage: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3YCurt1IZskAX-d67Qo&_nc_ht=scontent-dfw5-1.xx&oh=24ec77c91a4c7ff4c2656756b44de709&oe=616682F8'
      }).subscribe((res) => {
        if (res.success){
        sessionStorage.setItem('loggedInUser', JSON.stringify(res.data))
        this.router.navigateByUrl('/home')
      } else {
        this.registerFailed = true
      }})
      this.activeModal.close();
    } else {
      this.hideAlert = false;
    }
  }
}
