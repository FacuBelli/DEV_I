import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import RegistrationStepScreen from '../../components/ui/RegistrationStepScreen';
import * as FileSystem from 'expo-file-system';
import * as DocumentPicker from 'expo-document-picker';

export default function CreateAccount() {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState('');
  const [alias, setAlias] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleNextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  const handleSubmit = async () => {
    const registrationData = `Correo electrónico: ${email}\nAlias: ${alias}\nCódigo de verificación: ${verificationCode}\nContraseña: ${password}\n\n`;
    const fileName = 'registro_casiimote.txt';
    const fileUri = FileSystem.documentDirectory + fileName;

    try {
      let existingContent = '';
      const fileInfo = await FileSystem.getInfoAsync(fileUri);
      if (fileInfo.exists) {
        existingContent = await FileSystem.readAsStringAsync(fileUri, { encoding: FileSystem.EncodingType.UTF8 });
      }

      const newContent = existingContent + registrationData;

      await FileSystem.writeAsStringAsync(fileUri, newContent, {
        encoding: FileSystem.EncodingType.UTF8,
      });

      Alert.alert(
        'Registro Exitoso',
        `Datos guardados en ${fileUri}`,
        [
          { text: 'OK', onPress: () => router.replace('./home.tsx') },
        ]
      );
      console.log(`Datos guardados en: ${fileUri}`);
    } catch (error: any) {
      Alert.alert('Error al Guardar', error.message);
      console.error('Error al guardar los datos:', error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {currentStep === 1 && (
        <RegistrationStepScreen
          title="Crear Cuenta"
          subtitle="Guarda tus objetivos y preferencias para sacar el máximo provecho..."
          fields={[
            { label: 'Correo electrónico', placeholder: 'tu@email.com', keyboardType: 'email-address', value: email, onChangeText: setEmail, isValid: email.includes('@') },
            { label: 'Alias', placeholder: 'Tu nombre de usuario', value: alias, onChangeText: setAlias, isValid: alias.length > 3 },
          ]}
          primaryButtonText="Siguiente"
          onPrimaryButtonPress={handleNextStep}
          secondaryButtonText="Ya tienes una cuenta?"
          onSecondaryButtonPress={() => router.push('./login')}
          onClose={() => router.back()}
          currentStep={currentStep}
          totalSteps={3}
        />
      )}
      {currentStep === 2 && (
        <RegistrationStepScreen
          title="Verificar Correo"
          subtitle="Ingresá el código que recibiste al correo electrónico"
          fields={[
            { label: 'Código de Correo', placeholder: 'XXXXXX', keyboardType: 'number-pad', value: verificationCode, onChangeText: setVerificationCode, isValid: verificationCode.length === 6 },
          ]}
          primaryButtonText="Siguiente"
          onPrimaryButtonPress={handleNextStep}
          secondaryButtonText="Ya tienes una cuenta?"
          onSecondaryButtonPress={() => router.push('./login')}
          onClose={() => router.back()}
          currentStep={currentStep}
          totalSteps={3}
        />
      )}
      {currentStep === 3 && (
        <RegistrationStepScreen
          title="Crear Contraseña"
          subtitle="Para finalizar ingresá una contraseña"
          fields={[
            { label: 'Contraseña', placeholder: '********', secureTextEntry: true, value: password, onChangeText: setPassword, isValid: password.length >= 6 },
          ]}
          primaryButtonText="Finalizar"
          onPrimaryButtonPress={handleSubmit}
          secondaryButtonText="Ya tienes una cuenta?"
          onSecondaryButtonPress={() => router.push('./login')}
          onClose={() => router.back()}
          currentStep={currentStep}
          totalSteps={3}
        />
      )}
    </View>
  );
}