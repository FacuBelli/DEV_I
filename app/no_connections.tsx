import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function NoConnectionScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>No hay conexión establecida</Text>
      </View>
      <Text style={styles.subtitle}>
        Revisá tu conexión y volvé a intentarlo
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#B833E1',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  subtitle: {
    color: '#B833E1',
    fontSize: 16,
    textAlign: 'center',
  },
});
