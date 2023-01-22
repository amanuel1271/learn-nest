import SoundPlayer from './sound-player';

export default class SoundPlayerConsumer {
  soundPlayer: SoundPlayer

  constructor() {
    this.soundPlayer = new SoundPlayer();
  }

  playSomethingCool() {
    const coolSoundFileName = 'song.mp3';
    return this.soundPlayer.playSoundFile(coolSoundFileName);
  }
}