import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post.model';
import { UserService } from 'src/app/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap/modal/modal-dismiss-reasons';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styles: [],
    standalone: false
})
export class HomeComponent implements OnInit {

  private iniDate: Date = new Date();
  private index: number = 0;

  latestPosts: Post[] = [];
  totalPosts: number = 0;
  totalUsers: number = 0;
  displayModalBackdrop: boolean = false;

  modalCloseResult: string = '';

  constructor(private postService: PostsService, private userService: UserService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getLatestPosts();
    this.getPostsCount();
    this.getUsersCount();
  }

  private getModalDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'ESC Key Press';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'BackDrop Click';
    } else {
      return `with: ${reason}`;
    }
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

  addUserModal(content): void {
    //this.displayModalBackdrop = true;
    //document.querySelector('div.modal-backdrop').addEventListener('keyup', (e) => {
    //  if (e.) {

    //  }
    //});
    //$('#addUserModal').modal();

    this.modalService.open(content, { ariaLabelledBy: 'addPostModal-Header' }).result.then((result) => {
      this.modalCloseResult = `Closed with ${result}`;
    }, (reason) => {
      this.modalCloseResult = `Dismissed`
    });
  }

  addPostModal(): void {
    //this.displayModalBackdrop = true;
    //$('#addPostModal').modal();
  }
}
