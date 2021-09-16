import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-update-bio-form',
  templateUrl: './update-bio-form.component.html',
  styleUrls: ['./update-bio-form.component.css']
})
export class UpdateBioFormComponent implements OnInit {
  bio: string;
  loggedInUser: User;
  @Output() bioUpdated = new EventEmitter<User>();

  constructor(public activeModal: NgbActiveModal, private userService: UserService) { }

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser') || '{}')
  }

  updateBio(): void {
    this.loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser') || '{}')
    this.userService.updateUser({...this.loggedInUser, userProfileDescription: this.bio}).subscribe((res) => {
      if (res.success){
        sessionStorage.setItem('loggedInUser', JSON.stringify(res.data))
        this.bioUpdated.emit(res.data)
      }
    })
  }
}
