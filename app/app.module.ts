import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component'

import {PostComponent} from './services/post.component'
import {PostService} from './services/post.service'


@NgModule({
	imports:[FormsModule,BrowserModule,HttpModule],
	declarations:[AppComponent,PostComponent],
	bootstrap:[AppComponent]
})

export class AppModule{

}

