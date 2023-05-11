import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

 import { HttpClientModule } from '@angular/common/http';
import { Routes,RouterModule } from '@angular/router';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';
import { YouTubePlayerModule } from '@angular/youtube-player'
const routes: Routes = [
  {
    component: HomeComponent,
    path: ""
  },
  { component: SellerAuthComponent,
  path: "seller-auth"
},
  {
    component: SellerHomeComponent,
    path: "seller-home"
  }

]


 @NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    VideoplayerComponent





    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    YouTubePlayerModule
       

  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
