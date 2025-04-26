// app/login-flow/step1.tsx
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import ErrorMessage from '../../../components/ui/ErrorMessage';

export default function Step1() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [alias, setAlias] = useState('');
  const [aliasError, setAliasError] = useState(false);

  const handleNext = () => {
    if (alias.toLowerCase() === 'usuarioexistente') {
      setAliasError(true);
    } else {
      setAliasError(false);
      router.push('/(tabs)/loginFlow/step2');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Casiimote</Text>

      <Text style={styles.subtitle}>
        Guarda tus objetivos y preferencias para sacar el máximo provecho.
      </Text>

      <TextInput
        placeholder="Correo electrónico"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Alias"
        style={styles.input}
        value={alias}
        onChangeText={setAlias}
      />

      {aliasError && (
        <ErrorMessage
          message="El alias ya existe. Podés elegir alguna de estas opciones:"
          options={['Opcion1', 'Opcion2', 'Opcion3']}
        />
      )}

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Continuar</Text>
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
