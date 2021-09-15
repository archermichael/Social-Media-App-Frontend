import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';
import { PostFeedComponent } from './components/post-feed/post-feed.component';
import { PostComponent } from './components/post/post.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UpdateInfoFormComponent } from './components/update-info-form/update-info-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RegisterModalComponent,
    PostFeedComponent,
    PostComponent,
    NavbarComponent,
    HomePageComponent,
    FriendsListComponent,
    UserProfileComponent,
    UpdateInfoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
