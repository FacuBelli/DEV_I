import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import ErrorMessage from '../../components/ui/ErrorMessage';

export default function Step2() {
  const router = useRouter();
  const { email, alias } = useLocalSearchParams();
  const [code, setCode] = useState('');
  const [error, setError] = useState<'invalid' | 'expired' | ''>('');

  const handleNext = () => {
    if (code === '123456') {
      setError('');
      router.push('/createAccount/step3'); // o siguiente paso si hay más
    } else if (code === '000000') {
      setError('expired');
    } else {
      setError('invalid');
    }
  };

  const renderErrorMessage = () => {
    if (error === 'invalid') {
      return (
        <>
          <ErrorMessage message="El código es inválido, volvé a intentarlo con el mismo código o solicitá uno nuevo" />
          <Pressable onPress={() => alert('Reenviar código...')}>
            <Text style={styles.link}>REENVIAR CÓDIGO</Text>
          </Pressable>
        </>
      );
    }

    if (error === 'expired') {
      return (
        <>
          <ErrorMessage message="El código venció, podés volver a intentarlo con un nuevo código." />
          <Pressable onPress={() => alert('Reenviar código...')}>
            <Text style={styles.link}>REENVIAR CÓDIGO</Text>
          </Pressable>
        </>
      );
    }

    return null;
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Código de verificación"
        value={code}
        onChangeText={setCode}
        style={styles.input}
      />
      {renderErrorMessage()}
      <Button title="Siguiente" onPress={handleNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 },
  link: {
    marginTop: 10,
    color: '#B65CF3',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
