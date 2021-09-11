import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  faThumbsUp =  faThumbsUp;
  @Input() post: Post;

  constructor() { }

  ngOnInit(): void {
  }

}
