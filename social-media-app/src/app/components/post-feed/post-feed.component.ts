import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostImage } from 'src/app/models/PostImage';
import { User } from 'src/app/models/User';
import { PostService } from 'src/app/services/post-service.service';
import { UploadFileServiceService } from 'src/app/services/upload-file-service.service';

@Component({
  selector: 'app-post-feed',
  templateUrl: './post-feed.component.html',
  styleUrls: ['./post-feed.component.css']
})
export class PostFeedComponent implements OnInit {
  @Input() posts: Post[] = [];
  @Input() homePage: boolean = false;
  currentUser: User;
  page: number = 1;
  newPostMessage: string = '';
  selectedFiles: FileList;
  postImageList: PostImage[] = [];
  pageSize: number = 20;

  constructor(private uploadFileService: UploadFileServiceService, private postService: PostService) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem('loggedInUser') || '{}')
  }

  createPost(): void {
    this.postService.createPost({postMessage: this.newPostMessage, user: this.currentUser, postCreatedDate: new Date() }).subscribe((res) => {
      if (res.success && this.postImageList.length > 0){  
        for (let i = 0; i < this.postImageList.length; i++){
          this.postService.createPostImage({postImageUrl: this.postImageList[i].postImageUrl, postImageName: this.postImageList[i].postImageName, post_fk: res.data.postId}).subscribe((data) => {console.log(data)})
        }
      }
      this.posts.unshift({postCreatedDate: new Date(), postMessage: this.newPostMessage, user: this.currentUser, postImageList: this.postImageList})
      this.newPostMessage = ''
    })
  }

  onFileSelected(event: any): void {
    this.postImageList = []
    this.selectedFiles = event.target.files
    this.uploadImages()
  }

  uploadImages() {
    for (let i = 0; i < this.selectedFiles.length; i++){
      let filename: string = this.selectedFiles[i].name
      this.upload(this.selectedFiles[i])
      this.postImageList.push({postImageUrl: 'https://project2teamenergymilocao.s3.us-east-2.amazonaws.com/' + filename, postImageName: filename})
    }
  }

  upload(file: File){
    this.uploadFileService.upload(file).subscribe(event => {
      console.log(event)
      }
    )
  }

}
