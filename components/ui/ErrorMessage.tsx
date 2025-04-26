// components/ui/ErrorMessage.tsx
import { Text, View, StyleSheet } from 'react-native';
import React from 'react';

export default function ErrorMessage({ message, options }: { message: string; options?: string[] }) {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{message}</Text>
      {options && options.map((opt, idx) => (
        <Text key={idx} style={styles.optionText}>{opt}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 5,
  },
  optionText: {
    color: 'red',
    fontWeight: 'bold',
  },
});
