import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { PostService } from 'src/app/services/post-service.service';
import { User } from 'src/app/models/User';
import { Like } from 'src/app/models/Like';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  faThumbsUp =  faThumbsUp;
  currentUser: User;
  @Input() post: Post;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem('loggedInUser') || '{}')
  }

  likePost(): void {
    let like: Like = {
      userIdL: this.currentUser.userId || 0,
      userF: this.currentUser.userFirstName || '',
      userL: this.currentUser.userLastName || '',
      postIdFk: this.post.postId || 0
    }
    this.postService.likePost(like).subscribe((res) => {
      if (res.success){
        this.post.likes?.push(like)
      }
    })
  }
}
