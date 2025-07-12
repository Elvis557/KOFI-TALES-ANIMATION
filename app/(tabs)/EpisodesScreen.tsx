import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  Linking,
} from 'react-native';

const { width } = Dimensions.get('window');

const episodes = [
  {
    id: '1',
    title: '🎬 Kofi Tales – S1E01: Kofi’s Farmyard Adventures',
    thumbnail: { uri: 'https://img.youtube.com/vi/hZ8XMjPlenA/maxresdefault.jpg' },
    youtubeUrl: 'https://youtu.be/hZ8XMjPlenA',
  },
  {
    id: '2',
    title: '🎬 Kofi Tales – S1E02: Splash, Giggle, Rain!',
    thumbnail: { uri: 'https://img.youtube.com/vi/90DHfhvdFM4/maxresdefault.jpg' },
    youtubeUrl: 'https://youtu.be/90DHfhvdFM4',
  },
  {
    id: '3',
    title: '🎬 Kofi Tales – S1E03: ABC Party with Kofi! 🎉 Sing, Dance & Learn Your Letters!',
    thumbnail: { uri: 'https://img.youtube.com/vi/Y49vav4d8uw/maxresdefault.jpg' },
    youtubeUrl: 'https://youtu.be/Y49vav4d8uw',
  },
  {
    id: '4',
    title: '🎬 Kofi Tales – S1E04: Kofi’s Super Shapes Adventure! | Learn Shapes with Music, Magic & Fun ',
    thumbnail: { uri: 'https://img.youtube.com/vi/J-2UKhcYT6g/maxresdefault.jpg' },
    youtubeUrl: 'https://youtu.be/J-2UKhcYT6g',
  },
  {
    id: '5',
    title: '🎬 Kofi Tales – S1E05: Kofi and The Friendly Forest Animals🌳🦜🦊🐢🐿️',
    thumbnail: { uri: 'https://img.youtube.com/vi/TY0qKJzvgKU/maxresdefault.jpg' },
    youtubeUrl: 'https://youtu.be/TY0qKJzvgKU',
  },
  {
      id: '6',
      title: '🎬 Kofi Tales – S1E06: Kofi’s Mother’s Day Magic 💐✨ – A Heartwarming Surprise from a 3-Year-Old! 🧡🎁',
      thumbnail: { uri: 'https://img.youtube.com/vi/YOOlnZWm-FY/maxresdefault.jpg' },
      youtubeUrl: 'https://youtu.be/YOOlnZWm-FY',
  },
  {
      id: '7',
      title: '🎬 Kofi Tales – S1E07: 🎵 The Wheels on the Bus – Kofi’s Fun Ride! 🚌 Bump, Beep & Sing Along!',
      thumbnail: { uri: 'https://img.youtube.com/vi/zXFP5VtcPPs/maxresdefault.jpg' },
      youtubeUrl: 'https://youtu.be/zXFP5VtcPPs',
    
  },
  {
      id: '8',
      title: '🎬 Kofi Tales – S1E08: 🦖 Dino Stomp Dance Song for Kids  | Fun Dinosaur Music & Learning Video!',
      thumbnail: { uri: 'https://img.youtube.com/vi/iw8JkBDDZhs/maxresdefault.jpg' },
      youtubeUrl: 'https://youtu.be/iw8JkBDDZhs',
  },
  {
    id: '9',
    title: '🎬 Kofi Tales – S1E09: 100 Kids vs 1 Gorilla?! 🐵🍌 Kofi’s Epic Jungle Adventure!',
    thumbnail: { uri: 'https://img.youtube.com/vi/2AS5PSsU55Q/maxresdefault.jpg' },
    youtubeUrl: 'https://youtu.be/2AS5PSsU55Q',
},
{
  id: '10',
  title: '🎬 Kofi Tales S1E10: Counting with Kofi! 🎶 Learn 1–10 with Jungle Dance | Fun Kids Song & Rhyme',
  thumbnail: { uri: 'https://img.youtube.com/vi/6mj_bh9OT8I/maxresdefault.jpg' },
  youtubeUrl: 'https://youtu.be/6mj_bh9OT8I',
},
{
  id: '11',
  title: '🎬 Kofi Tales S1E11: 🌈 Kofi’s Color World Adventure | Learn Colors of the World 🌍| Kids Song & Dance!',
  thumbnail: { uri: 'https://img.youtube.com/vi/vxWxwuo-Hho/maxresdefault.jpg' },
  youtubeUrl: 'https://youtu.be/vxWxwuo-Hho',
},
{
  id: '12',
  title: '🎬 Kofi Tales – S1E12:♻️ Recycle with Kofi | Fun Educational Song + Dance for Children! 👦🎶',
  thumbnail: { uri: 'https://img.youtube.com/vi/FYFGdZ5t03s/maxresdefault.jpg' },
  youtubeUrl: 'https://youtu.be/FYFGdZ5t03s',
},
{
  id: '13',
  title: '🎬 Kofi Tales – S1E13: Kofi’s Magical Music World! | Learn Instruments for Kids 🎹🥁🎺 | Fun songs!',
  thumbnail: { uri: 'https://img.youtube.com/vi/kfuObW3l640/maxresdefault.jpg' },
  youtubeUrl: 'https://youtu.be/kfuObW3l640',
},
{
  id: '0',
  title: "Kofi's Magical World: The Kids Show That Changed Everything",
  thumbnail: { uri: 'https://img.youtube.com/vi/aUVY-9eQjyk/maxresdefault.jpg' },
  youtubeUrl: 'https://youtu.be/aUVY-9eQjyk',
},
];
export default function EpisodesScreen() {
  const openYouTube = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      alert("Can't open this link.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🎬 Kofi Tales Episodes</Text>
      <FlatList
        data={episodes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 40 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => openYouTube(item.youtubeUrl)}
          >
            <Image source={item.thumbnail} style={styles.thumbnail} resizeMode="cover" />
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.button}>
              <Text style={styles.buttonText}>▶ Watch on YouTube</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF3E0', paddingTop: 50 },
  heading: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FF6F61',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#FFF',
    borderRadius: 18,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  thumbnail: {
    width: '100%',
    height: undefined,
    aspectRatio: 16 / 9,
    resizeMode: 'cover',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  
  title: {
    fontSize: 20,
    fontWeight: '700',
    padding: 12,
    color: '#333',
  },
  button: {
    backgroundColor: '#FF6F61',
    padding: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '700',
  },
});
