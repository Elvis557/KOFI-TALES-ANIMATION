// HomeScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import useBackgroundMusic from '../useBackgroundMusic';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const [musicStarted, setMusicStarted] = useState(false);
  const navigation = useNavigation<any>();

  // ✅ Destructure play & pause from the hook
  const { play, pause } = useBackgroundMusic(require('../../assets/music.mp3'));

  const startMusic = async () => {
    await play();
    setMusicStarted(true);
  };

  const stopMusic = async () => {
    await pause();
    setMusicStarted(false);
  };

  return (
    <LinearGradient colors={['#FFF3E0', '#FFEBEE']} style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>🌟 Welcome to Kofi Tales!</Text>
        <Text style={styles.subtitle}>Where Fun, Learning & Magic Meet</Text>

        <Image
          source={require('../../assets/banner.png')}
          style={styles.image}
        />

        {/* 🎵 Start / Pause Music Toggle */}
        <TouchableOpacity
          style={[
            styles.musicButton,
            { backgroundColor: musicStarted ? '#6C63FF' : '#FF6F61' },
          ]}
          onPress={musicStarted ? stopMusic : startMusic}
        >
          <Text style={styles.musicButtonText}>
            {musicStarted ? 'Pause Music' : 'Start Background Music'}
          </Text>
        </TouchableOpacity>

        <View style={styles.menuContainer}>
          <MenuButton
            label="🎬 Watch Episodes"
            icon="playcircleo"
            onPress={() => navigation.navigate('EpisodesScreen')}
          />
          <MenuButton
            label="🎨 Coloring Corner"
            icon="edit"
            onPress={() => navigation.navigate('Coloring')}
          />
          <MenuButton
            label="🎵 Songs & Rhymes"
            icon="sound"
            onPress={() => navigation.navigate('Songs')}
          />
          <MenuButton
            label="📘 Learn with Kofi"
            icon="book"
            onPress={() => navigation.navigate('Learn')}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

type MenuButtonProps = {
  label: string;
  icon: keyof typeof AntDesign.glyphMap;
  onPress: () => void;
};

function MenuButton({ label, icon, onPress }: MenuButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <AntDesign name={icon} size={24} color="#333" style={styles.icon} />
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  container: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 100,
  },
  title: {
    fontSize: 34,
    fontWeight: '900',
    color: '#FF6F61',
    textAlign: 'center',
    marginBottom: 6,
    textShadowColor: '#FFB6B9',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 18,
    color: '#6C63FF',
    marginBottom: 20,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  image: {
    width: width * 0.7,
    height: width * 0.7,
    borderRadius: 30,
    marginBottom: 30,
    resizeMode: 'cover',
    borderWidth: 3,
    borderColor: '#FFD700',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 6,
  },
  menuContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FFDF6C',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 18,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '85%',
    marginVertical: 12,
    shadowColor: '#FFA500',
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
  icon: { marginRight: 12 },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  musicButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  musicButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
