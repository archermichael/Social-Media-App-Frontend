import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  alertMessage: string = '';
  hideAlert: boolean = true;
  hideSuccess: boolean = true;
  email: string = "";

  constructor(private userService: UserService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  sendResetPasswordLink(): void {
    this.userService.sendResetPasswordLink(this.email).subscribe((data) => {
      if (!data.success){
        this.alertMessage = data.message
        this.hideAlert = false
      } else {
        this.hideSuccess = false;
        setTimeout(() => {
          this.activeModal.close()
        }, 500)
      }
    })
  }
}
