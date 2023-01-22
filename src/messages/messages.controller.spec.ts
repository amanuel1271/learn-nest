
import SoundPlayer from './sound-player';
import SoundPlayerConsumer from './sound-player-consumer';
import {cryptos} from './database';
jest.mock('./sound-player');

const mockPlaySoundFile = jest.fn();

beforeAll(() => {
  (SoundPlayer as jest.Mock).mockImplementation(() => {
    return {
      playSoundFile: (() => cryptos),
      playMusicFile: (() => 1000),
      playUfcSong: (() => 9999),
    };
  });
});

beforeEach(() => {
  (SoundPlayer as jest.Mock).mockClear();
  mockPlaySoundFile.mockClear();
});

it('We can check if the consumer called the class constructor', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(SoundPlayer).toHaveBeenCalledTimes(1);
});

it('We can check if the consumer called a method on the class instance', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  console.log(soundPlayerConsumer.playSomethingCool());
  //expect(mockPlaySoundFile).toHaveBeenCalledWith('song.mp3');
});
