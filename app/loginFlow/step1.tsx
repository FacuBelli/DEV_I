import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import ErrorMessage from '../../components/ui/ErrorMessage';

export default function Step1() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [alias, setAlias] = useState('');
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!email || !alias) {
      setError('Por favor completa todos los campos');
      return;
    }
    setError('');
    router.push({
      pathname: '/loginFlow/step2',
      params: { email, alias },
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Alias"
        value={alias}
        onChangeText={setAlias}
        style={styles.input}
      />
      <ErrorMessage message={error} />
      <Button title="Siguiente" onPress={handleNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 },
});
