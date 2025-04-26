// app/login-flow/step3.tsx
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';

export default function Step3() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleFinish = () => {
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
    } else if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
    } else {
      setError('');
      // Simular guardar datos
      console.log('Usuario registrado');
      router.push('/(tabs)/home');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Casiimote</Text>

      <Text style={styles.subtitle}>
        Definí tu contraseña para proteger tu cuenta
      </Text>

      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        placeholder="Confirmar Contraseña"
        style={styles.input}
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleFinish}>
        <Text style={styles.buttonText}>Finalizar</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        ¿Ya tenes una cuenta? <Text style={styles.link}>Inicia sesión</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: 'white' },
  closeButton: { position: 'absolute', top: 40, left: 20 },
  closeButtonText: { fontSize: 24 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#B05FFF', marginTop: 80, textAlign: 'center' },
  subtitle: { textAlign: 'center', marginVertical: 20, color: '#333' },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
  error: { color: 'red', marginBottom: 10, textAlign: 'center' },
  button: {
    backgroundColor: '#B05FFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: { color: 'white', fontWeight: 'bold' },
  footer: { marginTop: 30, textAlign: 'center', color: '#333' },
  link: { color: '#B05FFF', fontWeight: 'bold' },
});
