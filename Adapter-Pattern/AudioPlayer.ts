import MediaAdapter from "./MediaAdapter"
import MediaPlayer from "./MediaPlayer"

class AudioPlayer implements MediaPlayer {

    mediaAdapter: MediaAdapter
 
    play(audioType: String, fileName: String): void{
    
       if (audioType == "mp3" ) {
          console.log('Playing mp3 file - '+fileName)
          
       } else if (audioType == "mp4" || audioType == "vlc"){
          this.mediaAdapter = new MediaAdapter(audioType)
          this.mediaAdapter.play(audioType, fileName)
       } else {
           console.log('Invalid media. '+audioType+' format not supported.')
       }
    }
 }
 
 export default AudioPlayer