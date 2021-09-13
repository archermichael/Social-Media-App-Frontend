import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post-feed',
  templateUrl: './post-feed.component.html',
  styleUrls: ['./post-feed.component.css']
})
export class PostFeedComponent implements OnInit {
  @Input() posts: Post[] = [];
  page: number = 1;

  constructor() { }

  ngOnInit(): void {
    
  }

}
