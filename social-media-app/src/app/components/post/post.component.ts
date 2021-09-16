import { Component, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp as faThumbsUpSolid } from '@fortawesome/free-solid-svg-icons';
import { PostService } from 'src/app/services/post-service.service';
import { User } from 'src/app/models/User';
import { Like } from 'src/app/models/Like';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  faThumbsUp =  faThumbsUp;
  faThumbsUpSolid = faThumbsUpSolid;
  currentUser: User;
  @Input() post: Post;
  @Input() changedUser: User;

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
        this.post.likes?.push(res.data)
      }
    })
  }

  unLikePost(): void {
    if (this.post.likes){
      for (let i=0; i<this.post.likes?.length; i++){
        if (this.currentUser.userId == this.post.likes[i].userIdL){
          this.postService.unLikePost(this.post.likes[i].likeId || 0).subscribe()
        }
      }
    }
    this.post.likes = this.post.likes?.filter(like => like.userIdL != this.currentUser.userId)
  }

  alreadyLiked(): boolean {
    if (this.post.likes){
      for (let i=0; i< this.post.likes.length; i++){
        if (this.currentUser.userId == this.post.likes[i].userIdL){
          return true
        }
      }
      return false;
    }
    return false;
  }
}
