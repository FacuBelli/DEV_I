// app/login-flow/index.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginFlow() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');

  const handleNext = () => {
    if (step === 3) {
      // Validar login simulado
      router.replace('/questionnaire/1'); // Ir al cuestionario
    } else {
      setStep(step + 1);
    }
  };

  return (
    <View style={styles.container}>
      {step === 1 && (
        <>
          <Text style={styles.label}>Correo Electrónico:</Text>
          <TextInput style={styles.input} value={email} onChangeText={setEmail} />
        </>
      )}

      {step === 2 && (
        <>
          <Text style={styles.label}>Código de Verificación:</Text>
          <TextInput style={styles.input} value={code} onChangeText={setCode} keyboardType="number-pad" />
        </>
      )}

      {step === 3 && (
        <>
          <Text style={styles.label}>Contraseña:</Text>
          <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />
        </>
      )}

      <Button title="Siguiente" onPress={handleNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});
