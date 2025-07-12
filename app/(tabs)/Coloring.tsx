// ColoringScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function ColoringScreen() {
  return (
    
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🖍️ Kofi Coloring Corner</Text>
      <Text style={styles.subtitle}>Tap to choose your favorite image to color!</Text>

      <Image
        source={require('../../assets/coloring/color1.png')} // or use `uri` for online
        style={styles.coloringImage}
        resizeMode="contain"
      />
    </ScrollView>

    
  );
}



const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFDE7',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF6F61',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#6C63FF',
    marginBottom: 20,
  },
  coloringImage: {
    width: width * 0.9,
    height: width * 1.2,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FFECB3',
    backgroundColor: '#FFF',
    marginBottom: 30,
  },
});
