import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faSearch, faHome } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faSearch = faSearch;
  faHome = faHome;
  loggedInUser: User;
  search: string = "";
  @Output() filterUsers = new EventEmitter<string>();
  
  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser') || '{}')
    this.activatedRoute.params.subscribe(params => {
      const id = Number.parseInt(params['id'])
    })
  }

  logout(): void {
    this.userService.logout()
    this.router.navigateByUrl('/')
  }

  filterFriends(event: any): void {
    this.filterUsers.emit(event)
  }

  getPath(): string {
    return this.router.url
  }
}
