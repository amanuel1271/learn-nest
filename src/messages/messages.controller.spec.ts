
import SoundPlayer from './sound-player';
import SoundPlayerConsumer from './sound-player-consumer';
jest.mock('./sound-player'); // SoundPlayer is now a mock constructor

const mockPlaySoundFile = jest.fn();

beforeAll(() => {
  // Replace the class-creation method with this mock version.
  (SoundPlayer as jest.Mock).mockImplementation(() => {
    // Replace the class-creation method with this mock version.
    return {playSoundFile: mockPlaySoundFile};
  });
});

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  (SoundPlayer as jest.Mock).mockClear();
  mockPlaySoundFile.mockClear();
});

it('We can check if the consumer called the class constructor', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(SoundPlayer).toHaveBeenCalledTimes(1);
});

it('We can check if the consumer called a method on the class instance', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  const coolSoundFileName = 'song.mp3';
  soundPlayerConsumer.playSomethingCool();
  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
});
