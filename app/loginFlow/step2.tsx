import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import ErrorMessage from '../../components/ui/ErrorMessage';

export default function Step2() {
  const router = useRouter();
  const { email, alias } = useLocalSearchParams();
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleNext = () => {
    if (code.trim() === '') {
      setError('Por favor ingresa el código de verificación');
      return;
    }
    setError('');
    router.push({
      pathname: '/loginFlow/step3',
      params: { email, alias, code },
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Código de verificación"
        value={code}
        onChangeText={setCode}
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
