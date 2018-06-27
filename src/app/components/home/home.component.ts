import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private postService: PostsService) {
    console.log("Dashboard Constructor called!!!");
  }

  ngOnInit() {
    console.log("Dashboard ngOnInit called!!!");

    this.getLatestPosts();
  }

  latestPosts: Post[];

  getLatestPosts(): void {
    this.postService.getLatestPosts().subscribe(posts => this.latestPosts = posts);
  }

}
