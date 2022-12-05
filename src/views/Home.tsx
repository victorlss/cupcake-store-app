import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import Card from '../components/Card';

const Hone = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Card style={styles.card}>
          <Text style={styles.sectionTitle}>Basic CardView Example</Text>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    alignItems: 'center', // Centered horizontally
  },
  sectionTitle: {
    fontSize: 24,
    color: '#000',
  },
  card: {
    height: 200,
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
  },
});

export default Hone;
