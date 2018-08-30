import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/post.model';
import { Location } from '@angular/common';
import swal from 'sweetalert';

@Component({
  selector: 'app-details',
  templateUrl: 'details.component.html',
  styles: []
})
export class DetailsComponent implements OnInit {
  post: Post = new Post();

  constructor(private route: ActivatedRoute, private postService: PostsService, private location: Location, private router: Router) { }

  ngOnInit() {
    this.getPostDetails();
  }

  getPostDetails(): void {
    const postId = +this.route.snapshot.paramMap.get('id');

    this.postService.getPosts().subscribe(postData => this.post = postData.find(f => { return f.id == postId }));
  }

  savePost(): void {
    this.postService.updatePost(this.post).subscribe(
      result => { },
      error => {
        swal({
          title: "Error!",
          text: "Post Updation failed!",
          icon: "error",
          buttons: {
            confirm: {
              text: "OK",
              closeModal: true
            }
          }
        });
      },
      () => {
        swal({
          title: "Post Updated",
          text: "Post Updation Successfully!",
          icon: "success",
          buttons: {
            confirm: {
              text: "OK",
              closeModal: true
            }
          }
        }).then(() => this.router.navigate(['/']));
      }
    );
  }

  deletePost(): void {
    this.postService.deletePost(this.post).subscribe(
      result => { },
      error => {
        swal({
          title: "Error!",
          text: "Post Deletion failed!",
          icon: "error",
          buttons: {
            confirm: {
              text: "OK",
              closeModal: true
            }
          }
        });
      },
      () => {
        swal({
          title: "Post Deleted",
          text: "Post Deleted Successfully!",
          icon: "success",
          buttons: {
            confirm: {
              text: "OK",
              closeModal: true
            }
          }
        }).then(() => this.router.navigate(['/']));
      }
    );
  }
}
