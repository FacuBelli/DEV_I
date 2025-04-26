// app/login-flow/step2.tsx
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import ErrorMessage from '../../../components/ui/ErrorMessage';

export default function Step2() {
  const router = useRouter();
  const [code, setCode] = useState('');
  const [codeExpired, setCodeExpired] = useState(false);

  const handleVerify = () => {
    if (code !== '1234') {
      setCodeExpired(true);
    } else {
      setCodeExpired(false);
      router.push('/loginFlow/step3');
    }
  };

  const handleResend = () => {
    // Simular reenvío de código
    console.log('Código reenviado');
    setCodeExpired(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Casiimote</Text>

      <Text style={styles.subtitle}>
        Ingresá el código que recibiste al correo electrónico
      </Text>

      <TextInput
        placeholder="Código de Correo"
        style={styles.input}
        value={code}
        onChangeText={setCode}
      />

      {codeExpired && (
        <>
          <ErrorMessage message="El código venció, puedes volver a intentarlo con un nuevo código." />
          <TouchableOpacity style={styles.resendButton} onPress={handleResend}>
            <Text style={styles.resendButtonText}>REENVIAR CÓDIGO</Text>
          </TouchableOpacity>
        </>
      )}

      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verificar</Text>
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
  resendButton: {
    backgroundColor: '#E8C3FF',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  resendButtonText: { color: 'white', fontWeight: 'bold' },
  buttonText: { color: 'white', fontWeight: 'bold' },
  footer: { marginTop: 30, textAlign: 'center', color: '#333' },
  link: { color: '#B05FFF', fontWeight: 'bold' },
});
