import { useEffect, useRef } from 'react';
import { Audio } from 'expo-av';

export default function useBackgroundMusic(musicFile: any) {
  const soundRef = useRef<Audio.Sound | null>(null);

  const play = async () => {
    if (!soundRef.current) {
      const { sound } = await Audio.Sound.createAsync(musicFile, {
        isLooping: true,
        shouldPlay: true,
      });
      soundRef.current = sound;
      await sound.playAsync();
    } else {
      await soundRef.current.playAsync();
    }
  };

  const pause = async () => {
    if (soundRef.current) {
      await soundRef.current.pauseAsync();
    }
  };

  useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync();
      }
    };
  }, []);

  return { play, pause };
}
