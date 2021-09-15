import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { PostService } from 'src/app/services/post-service.service';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  posts: Post[] = [];
  faCamera = faCamera;
  pathId: number;
  currentProfileUser: User;

  constructor(private route: ActivatedRoute, private userService: UserService, private postService: PostService) { }

  ngOnInit(): void {
    this.pathId = Number(this.route.snapshot.paramMap.get('id'))
    this.userService.getFriendById(this.pathId).subscribe((res) => {
      this.currentProfileUser = res.data
      this.postService.getPostsByUserId(this.currentProfileUser.userId || 0).subscribe(res => this.posts = res.data)
    })
  }
}
