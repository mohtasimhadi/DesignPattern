import AdvancedMediaPlayer from "./AdvancedMediaPlayer"
import MediaPlayer from "./MediaPlayer"
import MP4Player from "./MP4Player"
import VLCPlayer from "./VLCPlayer"

class MediaAdapter implements MediaPlayer {

    advancedMusicPlayer: AdvancedMediaPlayer
 
    constructor(audioType: String){
    
       if (audioType == "vlc" ) {
          this.advancedMusicPlayer = new VLCPlayer()
          
       } else if (audioType == "mp4"){
          this.advancedMusicPlayer = new MP4Player()
       }	
    }
 
    public play(audioType: String, fileName: String): void {
    
       if (audioType == "vlc"){
          this.advancedMusicPlayer.playVLC(fileName)
       }
       else if(audioType == "mp4"){
          this.advancedMusicPlayer.playMP4(fileName)
       }
    }
 }
 
 export default MediaAdapter