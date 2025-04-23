// app/(tabs)/home.tsx
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import React from 'react';

export default function HomeScreen() {
  const router = useRouter();
    const handleStart = () => {
      router.push("/questionnaire/1");
    };
    const handleCreateAccount = () => {
      router.push('/createAccount'); // Navega a la primera pantalla de registro
    };
  

  return (
    <ImageBackground
      source={require('../../assets/images/Logo1.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <View style={styles.content}>
        <Text style={styles.logo}>Casiimote</Text>

        <View style={styles.centerTextContainer}>
          <Text style={styles.title}>Comparte tu sabor</Text>
          <Text style={styles.title}>y descubre el mundo</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleStart}>
          <Text style={styles.buttonText}>Empecemos</Text>
        </TouchableOpacity>

        <Text style={styles.loginText}>
        ¿Ya tenes usuario?{' '}
        <Text style={styles.loginLink} onPress={() => router.push('/login')}>
          Inicia sesión
        </Text>
      </Text>
      <Text style={styles.loginText}>
        ¿Nuevo?{' '}
        <Text style={styles.loginLink} onPress={handleCreateAccount}>
          Registrate
        </Text>
      </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  content: {
    padding: 20,
    paddingBottom: 50,
  },
  logo: {
    color: '#B05FFF',
    fontSize: 28,
    fontWeight: 'bold',
    position: 'absolute',
    top: 50,
    left: 20,
  },
  centerTextContainer: {
    marginBottom: 30,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#B05FFF',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  loginText: {
    textAlign: 'center',
    color: '#fff',
  },
  loginLink: {
    color: '#FFD800',
    fontWeight: 'bold',
  },
});
