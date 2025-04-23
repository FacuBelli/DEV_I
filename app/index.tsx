import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function WelcomeScreen() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/questionnaire/1");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/Logo1.jpg")}
        style={styles.logo}
      />
      <Text style={styles.title}>¡Bienvenido/a!</Text>
      <Text style={styles.subtitle}>¿Listo para comenzar tu experiencia personalizada?</Text>
      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text style={styles.buttonText}>Empecemos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD800",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 30,
    resizeMode: "contain",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#26355D",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
    color: "#333",
  },
  button: {
    backgroundColor: "#A259FF",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
