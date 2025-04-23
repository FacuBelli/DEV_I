import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Field = {
  label: string;
  placeholder?: string;
  keyboardType?: 'default' | 'email-address' | 'number-pad' | 'phone-pad' | 'url';
  secureTextEntry?: boolean;
  value: string;
  onChangeText: (text: string) => void;
  isValid?: boolean;
};

type Props = {
  title: string;
  subtitle?: string;
  fields: Field[];
  primaryButtonText: string;
  secondaryButtonText?: string;
  onPrimaryButtonPress: () => void;
  onSecondaryButtonPress?: () => void;
  onClose: () => void;
  currentStep: number;
  totalSteps: number;
};

export default function RegistrationStepScreen({
  title,
  subtitle,
  fields,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryButtonPress,
  onSecondaryButtonPress,
  onClose,
  currentStep,
  totalSteps,
}: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Ionicons name="close-outline" size={32} color="#555" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}

      {fields.map((field, index) => (
        <View key={index} style={styles.inputContainer}>
          <Text style={styles.label}>{field.label}</Text>
          <TextInput
            style={styles.input}
            value={field.value}
            onChangeText={field.onChangeText}
            placeholder={field.placeholder}
            keyboardType={field.keyboardType}
            secureTextEntry={field.secureTextEntry}
          />
          {field.isValid !== undefined && field.isValid && (
            <Ionicons name="checkmark-circle-outline" size={24} color="green" style={styles.icon} />
          )}
        </View>
      ))}

      <TouchableOpacity style={styles.primaryButton} onPress={onPrimaryButtonPress}>
        <Text style={styles.primaryButtonText}>{primaryButtonText}</Text>
      </TouchableOpacity>

      {secondaryButtonText && onSecondaryButtonPress && (
        <TouchableOpacity onPress={onSecondaryButtonPress}>
          <Text style={styles.secondaryButtonText}>{secondaryButtonText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 50,
    textAlign: 'center',
    color: '#883AB7',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
    position: 'relative', // Para posicionar el icono dentro
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 30,
  },
  primaryButton: {
    backgroundColor: '#B05FFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButtonText: {
    textAlign: 'center',
    color: '#555',
    marginTop: 20,
  },
});