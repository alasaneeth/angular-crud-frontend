import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiURl ="http://localhost/angular-crud-api/public/api";

  constructor(private http : HttpClient) { }

  getPosts() : Observable<Post[]>{
    return this.http.get<Post[]>(this.apiURl+"/post")
  }

    createPost(data:Post) : Observable<Post[]>{
    return this.http.post<Post[]>(this.apiURl+"/post",data);
  }

    findPost(id:string) : Observable<Post>{
    return this.http.get<Post>(this.apiURl+"/post/"+id)
  }


 
}
