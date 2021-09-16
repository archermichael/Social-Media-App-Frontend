import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { PostService } from 'src/app/services/post-service.service';
import { UserService } from 'src/app/services/user-service.service';
import { UpdateBioFormComponent } from '../update-bio-form/update-bio-form.component';
import { UploadProfileImageFormComponent } from '../upload-profile-image-form/upload-profile-image-form.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  posts: Post[] = [];
  faCamera = faCamera;
  pathId: number;
  currentProfileUser: User = {userId: 0, username: "", password: ""};
  loggedInUser: User;

  constructor(private route: ActivatedRoute, private userService: UserService, private postService: PostService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser') || '{}')
    this.pathId = Number(this.route.snapshot.paramMap.get('id'))
    this.userService.getFriendById(this.pathId).subscribe((res) => {
      this.currentProfileUser = res.data
      this.postService.getPostsByUserId(this.currentProfileUser.userId || 0).subscribe(res => this.posts = res.data)
    })
  }

  updateProfile(user: User): void {
    this.loggedInUser = user;
    if (user.userId == this.currentProfileUser.userId){
      this.currentProfileUser = user
    }
  }

  openUpdateBioForm(): void {
    const modalRef = this.modalService.open(UpdateBioFormComponent, { centered: true, size: 'sm' });
    modalRef.componentInstance.bioUpdated.subscribe((user: User) => {
      this.currentProfileUser = user;
    })
  }

  openUpdateProfileImageForm(): void {
    const modalRef = this.modalService.open(UploadProfileImageFormComponent, { centered: true, size: 'sm' });
    modalRef.componentInstance.profileImageUpdated.subscribe((user: User) => {
      this.currentProfileUser = user;
    })
  }
}
