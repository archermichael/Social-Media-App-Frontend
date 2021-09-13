import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log(JSON.parse(sessionStorage.getItem('loggedInUser') || '{}'))
    this.userService.getFriends().subscribe(users => this.users = users.data.filter((user: User) => user.userId != JSON.parse(sessionStorage.getItem('loggedInUser') || '{}').userId))
  }

}
