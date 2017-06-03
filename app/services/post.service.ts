import {Injectable} from '@angular/core';

import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/operator/map';

interface Post{
	_id:number,
	title:string,
	body:string
}

@Injectable()


export class PostService{
	private posts:any[];
	private apiUrl:string;
	private postData:any;

	constructor(private _http:Http){ //inject http service

		this.apiUrl="https://jsonplaceholder.typicode.com/posts"
	// 	this.posts=[{tittle:'hello bengalore',body:'hello janeesha putta!!!'},
	// 	           {tittle:'hello mandya',body:'hello asha!!!'},
	// 	           {tittle:'hell mysore',body:'im commig'},
	// 	           {tittle:'hi',body:"im comming"}]
	 }

	getPosts():Observable<Post[]>{
            return this
                    ._http
                    .get(this.apiUrl)
                    .map((response)=>{
                    	
                    	return response.json()
                    	
                    });

      
		// return this.posts;
	}

	// addPost(newPost:any){
	// 	this.posts.push(newPost)
	// }
}