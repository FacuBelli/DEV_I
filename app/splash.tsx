import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function SplashScreen() {
  const router = useRouter();

  const handleStart = () => {
    router.replace("./question1"); // Va a la primera pregunta
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/Logo1.jpg")} style={styles.logo} />
      <Text style={styles.title}>Casiimote</Text>
      <Text style={styles.subtitle}>Compartí tu sabor y descubrí el mundo</Text>

      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text style={styles.buttonText}>Empecemos</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
        ¿Ya tenés usuario? <Text style={styles.loginLink}>Inicia sesión</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD800",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#AD38E0",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#AD38E0",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  loginText: {
    color: "white",
    fontSize: 14,
  },
  loginLink: {
    color: "#AD38E0",
    fontWeight: "bold",
  },
});
