import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as FileSystem from 'expo-file-system';
import ErrorMessage from '../../components/ui/ErrorMessage';

export default function Step3() {
  const router = useRouter();
  const { email, alias, code } = useLocalSearchParams();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleFinish = async () => {
    if (!password) {
      setError('La contraseña no puede estar vacía');
      return;
    }
    setError('');

    const data = `Email: ${email}\nAlias: ${alias}\nCódigo: ${code}\nContraseña: ${password}`;
    const fileUri = FileSystem.documentDirectory + 'registro_casiimote.txt';
    await FileSystem.writeAsStringAsync(fileUri, data);

    Alert.alert('Cuenta creada', 'Tu cuenta ha sido registrada con éxito');
    router.replace('/(tabs)/home');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <ErrorMessage message={error} />
      <Button title="Finalizar" onPress={handleFinish} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 },
});
