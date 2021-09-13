import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { POSTS } from '../mock-posts';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:9000/api/posts'

  constructor(private http: HttpClient) { }

  getAllPosts(): Post[] { // this will return an observable when endpoints for posts are setup
    return POSTS;
  }
}
