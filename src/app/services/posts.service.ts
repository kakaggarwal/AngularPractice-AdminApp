import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) { 

  }

  getLatestPosts(): Observable<Post[]> {
    return of(null);
  }
}
