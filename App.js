import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

console.log(__DEV__);
console.warn('[WARNING]');

export default function App() {
  return (
    <View style={styles.container}>
      <Text>DEV: {__DEV__ ? 'true' : 'false'}</Text>
      <StatusBar style="auto" />
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
