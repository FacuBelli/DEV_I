import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function Step3() {
  const router = useRouter();
  const { email } = useLocalSearchParams();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleNext = () => {
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }else  if (!password) {
      setError('La contraseña no puede estar vacía');
      return;
    }

    // Acá podrías guardar la contraseña o enviarla a una API si lo necesitás

    // Redirigir al cuestionario
    router.push('/questionnaire/1');
  };

  return (
    <View style={styles.container}>
      <Text>Creá una contraseña</Text>
      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      {error !== '' && <Text style={styles.error}>{error}</Text>}
      <Button title="Continuar" onPress={handleNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 },
  error: { color: 'red', marginBottom: 10 },
});

