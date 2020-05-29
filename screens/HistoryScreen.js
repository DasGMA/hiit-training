import React from 'react';
import { StyleSheet, View } from 'react-native';
import History from '../components/History/History';

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <History />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  }
});
