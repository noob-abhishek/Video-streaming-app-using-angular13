import { Component,Input,OnInit,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import * as googleapis  from 'googleapis';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css']
})
export class VideoplayerComponent {
  id = "MgWDSSLjhkQ"
  playerVars = {
    cc_lang_pref: 'en'
  }
player:any;

savePlayer(player:any){
  this.player = player
}
 
playVideo(){
  this.player.playVideo()

}
pauseVideo(){
  this.player.pauseVideo()
  
}


  }




 



