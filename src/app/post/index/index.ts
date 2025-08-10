import { Component } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post-service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-index',
  imports: [RouterModule],
  templateUrl: './index.html',
  styleUrl: './index.css'
})
export class Index {
  posts: Post[] = [];

  constructor(private postService: PostService, private router:Router){}

  ngOnInit(): void{
    this.postService.getPosts().subscribe((data: Post[])=>{
      this.posts =  data;

    })
  }
}
