import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PhotoComponent } from './photo/photo.component';
import { DestinationComponent } from './destination/destination.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { MsgComponent } from './msg/msg.component';
import { HttpGetComponent } from './http-get/http-get.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GithubService } from './github.service';

@NgModule({
  declarations: [
 
 
    AppComponent,
    ContactComponent,
    AboutComponent,
    PhotoComponent,
    DestinationComponent,
    HomeComponent,
    ArticleComponent,
    MsgComponent,
    HttpGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
