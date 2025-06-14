// App.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Form from './Form';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Form/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
