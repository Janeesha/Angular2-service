import {Component} from '@angular/core'
import {PostService} from './post.service'


@Component({
	selector:'posts',
	template: `<div class="container">
	           <h1>My BlogPost</h1><br>
	           <div>
	           <label>Tittle:</label>
	           <input class="form-control" type="text" [(ngModel)]="tittle"/><br>
	           <label>Tittle:</label>
	           <input class="form-control" type="text" [(ngModel)]="body"/><br>
	           <input class="btn btn-primary" type="button" (click)="addPost()" value="Add Post"/><br>
	           </div>
	           <div class="container">
	           <ul *ngFor="let post of posts">
	           <li><b>{{post.title}}</b></li>
	           <li>{{post.body}}</li>
	           </ul>
	           </div><br>
	           </div>`
})


export class PostComponent { 
      private posts:any[];
      private tittle:string;//same as ng model
      private body:string;
      private newPost:any;


      constructor(private _postService:PostService){ //inject

      	this._postService.getPosts().subscribe((response)=>{
      		this.posts=response
      	});

      }

      // addPost()
      // {
      // 	this.newPost={
      // 		tittle:this.tittle,
      // 		body:this.body
      // 	} 
      
      // 	console.log(this.newPost)

      // 	this._postService.addPost(this.newPost);

      // }
}