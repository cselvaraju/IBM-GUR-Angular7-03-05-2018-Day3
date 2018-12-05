import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

import { Post } from '../../models/post.model';

@Component({
  selector: 'app-postsdemo',
  templateUrl: './postsdemo.component.html',
  styleUrls: ['./postsdemo.component.css']
})
export class PostsdemoComponent implements OnInit {

  posts: Post[];
  newTitle: string;
  newBody: string;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.newTitle = this.newBody = '';
    this.postService.getPosts().subscribe(
      (data) => this.posts = data
    );
  }

  addPost() {
    this.postService.addPost({
      id: null,
      title: this.newTitle,
      body: this.newBody
    }).subscribe(
      (data) => console.log(data)
    );
  }

}
