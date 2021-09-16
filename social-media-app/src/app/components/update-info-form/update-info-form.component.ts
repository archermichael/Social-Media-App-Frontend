import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-update-info-form',
  templateUrl: './update-info-form.component.html',
  styleUrls: ['./update-info-form.component.css']
})
export class UpdateInfoFormComponent implements OnInit {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  loggedInUser: User;
  editingInfo: boolean = false;
  @Output() updateUser = new EventEmitter<User>();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser') || '{}')
    this.username = this.loggedInUser.username;
    this.email = this.loggedInUser.userEmail || '';
    this.firstName = this.loggedInUser.userFirstName || '';
    this.lastName = this.loggedInUser.userLastName || '';
  }

  editInfo(): void {
    this.editingInfo = true;
  }

  saveInfo(): void {
    this.userService.updateUser({userId: this.loggedInUser.userId, 
                                 username: this.username, 
                                 password: this.loggedInUser.password, 
                                 userFirstName: this.firstName, 
                                 userLastName: this.lastName,
                                 userEmail: this.email, 
                                 userProfileDescription: '',
                                 userProfileImage: this.loggedInUser.userProfileImage}).subscribe((res) => {
                                   console.log(res)
                                   if (res.success){
                                     sessionStorage.setItem("loggedInUser", JSON.stringify(res.data))
                                     this.updateUser.emit(res.data)
                                   }
                                 })
    this.editingInfo = false;
  }
}
