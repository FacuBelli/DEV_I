// components/AuthStep.tsx
import React from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';

interface AuthStepProps {
  title: string;
  subtitle: string;
  placeholder: string;
  buttonText: string;
  onSubmit: (value: string) => void;
}

const AuthStep: React.FC<AuthStepProps> = ({ title, subtitle, placeholder, buttonText, onSubmit }) => {
  const [input, setInput] = React.useState('');

  const handleSubmit = () => {
    onSubmit(input);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={input}
        onChangeText={setInput}
      />
      <Button title={buttonText} onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default AuthStep;
