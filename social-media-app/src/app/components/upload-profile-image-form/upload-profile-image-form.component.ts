import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/User';
import { UploadFileServiceService } from 'src/app/services/upload-file-service.service';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-upload-profile-image-form',
  templateUrl: './upload-profile-image-form.component.html',
  styleUrls: ['./upload-profile-image-form.component.css']
})
export class UploadProfileImageFormComponent implements OnInit {
  faImages = faImages;
  selectedFile: File;
  loggedInUser: User;
  @Output() profileImageUpdated = new EventEmitter<User>();

  constructor(private uploadFileService: UploadFileServiceService, private userService: UserService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser') || '{}')
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0]
    const fileName = this.selectedFile.name
    this.uploadFileService.upload(this.selectedFile).subscribe((event) => {
      console.log(event)
      this.userService.updateUser({...this.loggedInUser, userProfileImage: 'https://project2teamenergymilocao.s3.us-east-2.amazonaws.com/' + fileName}).subscribe((res) => {
        if (res.success){
          setTimeout(() => {
            sessionStorage.setItem('loggedInUser', JSON.stringify({...this.loggedInUser, userProfileImage: 'https://project2teamenergymilocao.s3.us-east-2.amazonaws.com/' + fileName}))
            this.profileImageUpdated.emit({...this.loggedInUser, userProfileImage: 'https://project2teamenergymilocao.s3.us-east-2.amazonaws.com/' + fileName})
          }, 1000)
        }
      })
    })
  }
}
