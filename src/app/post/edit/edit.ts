import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PostService } from '../post-service';

@Component({
  selector: 'app-edit',
  imports: [RouterModule,FormsModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css'
})
export class Edit {
  title="";
  body="";
  error = "";

  constructor(private postService: PostService, private router:Router,private route:ActivatedRoute) {}

  ogOnInnit():void {

  }
 
  submit(){
    if(!this.title || !this.body){
      this.error = "Titke and body field are required";
      return
    }

    const input = {
     title : this.title,
     body: this.body,
     id:1
    }

    this.postService.createPost(input).subscribe();
    alert("Post Is Creted");

    this.router.navigate(['/posts'])

  }
}
