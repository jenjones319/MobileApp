import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: '#888', fontSize: 18}}>Hello world!</Text>
      <StatusBar style="auto" />
    
    <TouchableOpacity
    onPress={() => alert('Hello, world!')}
    style={{ backgroundColor: 'blue' }}>
    <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
    </TouchableOpacity>
    
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
