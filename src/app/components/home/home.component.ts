import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  private iniDate: Date = new Date();
  private index: number = 0;

  latestPosts: Post[] = [];
  totalPosts: number = 0;
  totalUsers: number = 0;

  constructor(private postService: PostsService, private userService: UserService) {
  }

  ngOnInit() {
    this.getLatestPosts();
    this.getPostsCount();
    this.getUsersCount();
  }

  getLatestPosts(): void {
    this.postService.getPosts().subscribe(
      (posts) => {
        this.latestPosts = posts.reverse().slice(0, 7)
      })
  }

  getPostsCount(): void {
    this.postService.getPosts().subscribe(posts => this.totalPosts = posts.length);
  }

  getUsersCount(): void {
    this.userService.getUsers().subscribe(users => this.totalUsers = users.length);
  }
}
