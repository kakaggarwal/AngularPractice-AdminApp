import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  latestPosts: Post[];

  constructor(private postService: PostsService) {
  }

  ngOnInit() {
    this.getLatestPosts();
  }

  getLatestPosts(): void {
    this.postService.getLatestPosts().subscribe(
      (posts) => {
        this.latestPosts = posts.filter(f => f.title.length < 20);
        this.latestPosts.forEach(
          (item) => {
            item.category = item.id % 5 === 1 ? 'Web App Development' : item.id % 5 === 2 ? 'Mobile App Development' : item.id % 5 === 3 ? 'UI/UX Design' : item.id % 5 === 4 ? 'Project Management' : 'Desktop Software Development';
            item.postedDate = new Date()
          }
        );
      }
    );
  }
}
