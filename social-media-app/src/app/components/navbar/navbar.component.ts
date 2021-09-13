import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faSearch = faSearch;
  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.userService.logout()
    this.router.navigateByUrl('/')
  }
}
