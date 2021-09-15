import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    // if no session, navigate back to login screen
    if (!sessionStorage.getItem('loggedInUser')){
      this.router.navigateByUrl('/')
    }
    this.postService.getAllPosts().subscribe(posts => this.posts = posts.data.reverse()); // reverse to show most recent posts on top
  }
}
