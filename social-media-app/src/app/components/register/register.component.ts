import { Component, OnInit } from '@angular/core';
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

  constructor(public activeModal: NgbActiveModal, private userService: UserService) { }

  ngOnInit(): void {
  }

  register(): void {
    this.userService.register({
      username: this.username, 
      password: this.password, 
      userFirstName: this.firstName, 
      userLastName: this.lastName, 
      userEmail: this.email
    }).subscribe(data => console.log(data));

    this.activeModal.close();
  }
}
