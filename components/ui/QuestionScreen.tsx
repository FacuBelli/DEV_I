import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";

type Props = {
  title: string;
  options: string[];
  step: number;
  total: number;
  onNext: (answer: string) => void;
};

export default function QuestionScreen({ title, options, step, total, onNext }: Props) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.stepText}>{`Pregunta ${step} de ${total}`}</Text>
      <Text style={styles.title}>{title}</Text>

      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.option,
            selectedOption === option && styles.selectedOption,
          ]}
          onPress={() => setSelectedOption(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}

      <Button
        title={step === total ? "Finalizar" : "Siguiente"}
        onPress={() => selectedOption && onNext(selectedOption)}
        disabled={!selectedOption}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  stepText: { fontSize: 16, marginBottom: 10, textAlign: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  option: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: "#C24DD0",
  },
  optionText: { fontSize: 16, textAlign: "center" },
});
