import AdvancedMediaPlayer from "./AdvancedMediaPlayer"

class MP4Player implements AdvancedMediaPlayer {
    playVLC(fileName: String): void {}

    playMP4(fileName: String): void {
        console.log('Playing MP4 file - '+fileName)
    }
}

export default MP4Player