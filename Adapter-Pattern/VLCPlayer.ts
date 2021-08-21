import AdvancedMediaPlayer from "./AdvancedMediaPlayer"

class VLCPlayer implements AdvancedMediaPlayer {
    playVLC(fileName: String): void {
        console.log('Playing VLC file - '+fileName)
    }

    playMP4(fileName: String): void {}
}

export default VLCPlayer