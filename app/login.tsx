import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import React from 'react';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>

      <TextInput
        placeholder="Correo electrónico"
        placeholderTextColor="#aaa"
        style={styles.input}
      />
      <TextInput
        placeholder="Contraseña"
        placeholderTextColor="#aaa"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/home')}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.backText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
    color: '#fff',
  },
  button: {
    backgroundColor: '#B05FFF',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  backText: {
    color: '#FFD800',
    textAlign: 'center',
    marginTop: 10,
  },
});
