// app/login.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import AuthStep from '../components/ui/AuthSteps';

export default function LoginScreen() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleNextStep = (value: string) => {
    if (step === 1) {
      // Guardar correo y alias, continuar al siguiente paso
      setStep(2);
    } else if (step === 2) {
      // Guardar código de verificación, continuar al siguiente paso
      setStep(3);
    } else if (step === 3) {
      // Guardar la contraseña, redirigir al Home o siguiente parte del proceso
      router.push('/home');
    }
  };

  return (
    <View style={styles.container}>
      {step === 1 && (
        <AuthStep
          title="Casiimote"
          subtitle="Guarda tus objetivos y preferencias para sacar el máximo provecho."
          placeholder="Correo electrónico"
          buttonText="Siguiente"
          onSubmit={handleNextStep}
        />
      )}
      {step === 2 && (
        <AuthStep
          title="Casiimote"
          subtitle="Ingresa el código que recibiste al correo electrónico"
          placeholder="Código de Correo"
          buttonText="Siguiente"
          onSubmit={handleNextStep}
        />
      )}
      {step === 3 && (
        <AuthStep
          title="Casiimote"
          subtitle="Para finalizar ingresa una contraseña"
          placeholder="Contraseña"
          buttonText="Siguiente"
          onSubmit={handleNextStep}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
  },
});
