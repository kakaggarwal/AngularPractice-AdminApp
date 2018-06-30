import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Post } from '../models/post.model';
import { NotificationService } from './notification.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService
  ) { }

  private notify(message: string, type: string) {
    this.notificationService.add(message, type);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://jsonplaceholder.typicode.com/posts');
  }

  updatePost(post: Post): Observable<any> {
    return this.http.put('http://jsonplaceholder.typicode.com/posts/' + post.id, post, httpOptions);
  }

  deletePost(post: Post): Observable<any> {
    return this.http.delete('http://jsonplaceholder.typicode.com/posts/' + post.id);
  }
}
