import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Post } from '../models/post.model';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(
    private http: HttpClient,
    private notificationService: NotificationService
  ) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getLatestPosts(): Observable<Post[]> {
    return this.getPosts();
  }

  private notify(message: string) {
    this.notificationService.add(message);
  }
}
