import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function Step1() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [alias, setAlias] = useState('');
  const [emailError, setEmailError] = useState('');
  const [aliasError, setAliasError] = useState('');
  const [aliasSuggestions, setAliasSuggestions] = useState<string[]>([]);

  const handleNext = () => {
    if (email === 'ya@existe.com') {
      setEmailError('El correo electrónico ingresado ya existe.');
    } else {
      setEmailError('');
    }

    if (alias.toLowerCase() === 'pepito') {
      setAliasError('El alias ya existe');
      setAliasSuggestions(['pepito123', 'pepi_tu', 'pepito99']);
    } else {
      setAliasError('');
      setAliasSuggestions([]);
      router.push('/createAccount/step2');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Casiimote</Text>
      <Text style={styles.subtitle}>
        Guarda tus objetivos y preferencias para sacar el máximo provecho.
      </Text>

      <TextInput
        placeholder="Correo electrónico"
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />
      {emailError ? (
        <Text style={styles.error}>{emailError} <Text style={styles.link}>¿Olvidaste tu contraseña?</Text></Text>
      ) : null}

      <TextInput
        placeholder="Alias"
        style={styles.input}
        onChangeText={setAlias}
        value={alias}
      />
      {aliasError ? (
        <>
          <Text style={styles.error}>{aliasError}</Text>
          {aliasSuggestions.map((s, idx) => (
            <Text key={idx} style={styles.suggestion}>{s}</Text>
          ))}
        </>
      ) : null}

      <Button title="SIGUIENTE" onPress={handleNext} />

      <Pressable>
        <Text style={styles.linkBottom}>¿Ya tenés una cuenta?</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  title: { fontSize: 30, fontWeight: 'bold', color: '#B65CF3', textAlign: 'center' },
  subtitle: { fontSize: 14, textAlign: 'center', marginBottom: 20 },
  input: {
    borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 6,
  },
  error: { color: 'red', marginBottom: 5 },
  suggestion: { color: '#B65CF3', marginLeft: 10 },
  link: { color: '#B65CF3', textDecorationLine: 'underline' },
  linkBottom: { marginTop: 20, textAlign: 'center', color: '#B65CF3' },
});
