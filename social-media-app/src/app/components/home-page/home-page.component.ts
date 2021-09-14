import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(posts => this.posts = posts.data.reverse());
  }
}
