import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';
import { PostImage } from '../models/PostImage';
import { Like } from '../models/Like';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:9000/api/posts'

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<any> { // this will return an observable when endpoints for posts are setup
    return this.http.get<any>(this.apiUrl)
  }

  createPost(post: Post): Observable<any> {
    return this.http.post<Post>(this.apiUrl, post)
  }

  createPostImage(postImage: PostImage): Observable<any> {
    return this.http.post<PostImage>('http://localhost:9000/api/postImage', postImage)
  }

  getPostsByUserId(id: number): Observable<any> {
    return this.http.get<Post[]>(this.apiUrl + "/" + id)
  }

  likePost(like: Like): Observable<any> {
    return this.http.post<Like>('http://localhost:9000/api/likes', like)
  }

  unLikePost(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:9000/api/likes/${id}`)
  }
}
