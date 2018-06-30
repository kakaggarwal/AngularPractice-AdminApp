import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/post.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: 'details.component.html',
  styles: []
})
export class DetailsComponent implements OnInit {
  post: Post = new Post();

  constructor(private route: ActivatedRoute, private postService: PostsService, private location: Location) { }

  ngOnInit() {
    this.getPostDetails();
  }

  getPostDetails(): void {
    const postId = +this.route.snapshot.paramMap.get('id');

    this.postService.getPosts().subscribe(postData => this.post = postData.find(f => { return f.id == postId }));
  }

  savePost(): void {
    this.postService.updatePost(this.post).subscribe(() => this.location.back());
  }

  deletePost(): void {
    this.postService.deletePost(this.post).subscribe(() => this.location.back());
  }
}
