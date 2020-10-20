import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'olive', fontSize: 18}}>Hello world!</Text>
      <br></br>
      <StatusBar style="auto" />
    
    <TouchableOpacity
    onPress={() => alert('Added!')}
    style={{ backgroundColor: 'olive' }}>
    <Text style={{ fontSize: 16, color: 'white' }}> Add Assignment </Text>
    </TouchableOpacity>
    
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'khaki',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
