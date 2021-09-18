import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {
  @Input() users: User[] = [];
  @Input() showFriends: boolean = true;
  @Input() profilePage: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  getPath(): string {
    return this.router.url
  }
}
