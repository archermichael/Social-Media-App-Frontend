import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { PostService } from 'src/app/services/post-service.service';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  posts: Post[] = [];
  friends: User[] = [];
  displayedFriends: User[] = [];
  loggedInUser: User;
  

  constructor(private postService: PostService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser') || '{}')
    this.userService.getFriends().subscribe((res) => {
      this.friends = res.data.filter((friend: User) => friend.userId != this.loggedInUser.userId)
      this.displayedFriends = res.data.filter((friend: User) => friend.userId != this.loggedInUser.userId)
    })
    // if no session, navigate back to login screen
    if (!sessionStorage.getItem('loggedInUser')){
      this.router.navigateByUrl('/')
    }
    this.postService.getAllPosts().subscribe(posts => this.posts = posts.data.reverse()); // reverse to show most recent posts on top
  }

  filterFriends(event: any){
    this.displayedFriends = this.friends.filter(friend => (friend.userFirstName?.toLowerCase().startsWith(event.toLowerCase())) || (friend.userLastName?.toLowerCase().startsWith(event.toLowerCase())))
  }
}
