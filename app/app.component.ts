import {Component} from '@angular/core';

import {PostComponent} from './services/post.component'

import {PostService} from './services/post.service'

@Component({
	selector: 'my-app',
	template: `<h1>angular2 services</h1><br>
	            <posts></posts>`,
	providers:[PostService]
})

export class AppComponent{

}