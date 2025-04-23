import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

type Props = {
  title: string;
  options: string[];
  step: number;
  total: number;
};

export default function QuestionScreen({ title, options, step, total }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const router = useRouter();

  const handleNext = () => {
    if (step < total) {
      router.push({
        pathname: "/questionnaire/[step]",
        params: { step: String(step + 1) },
      });
    } else {

      router.replace("/home");
    }
  };
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.step}>Empecemos {step}</Text>
      <Text style={styles.title}>{title}</Text>

      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.option,
            selectedIndex === index && styles.selectedOption,
          ]}
          onPress={() => setSelectedIndex(index)}
        >
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.info}>
        Usamos esta información para calcular tus necesidades y que tengas
        recomendaciones personalizadas
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleNext}
        disabled={selectedIndex === null}
      >
        <Text style={styles.buttonText}>Siguiente</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  step: { fontSize: 14, marginBottom: 10 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  option: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  selectedOption: {
    borderColor: "#A259FF",
    backgroundColor: "#F3EFFF",
  },
  info: {
    fontSize: 11,
    textAlign: "center",
    marginVertical: 20,
    color: "#444",
  },
  button: {
    backgroundColor: "#C792F1",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
