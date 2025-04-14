import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { RadioButton } from "react-native-paper";

interface QuestionOption {
  label: string;
  value: string;
}

interface QuestionScreenProps {
  title: string;
  options: QuestionOption[];
  selected: string;
  onSelect: (value: string) => void;
  onNext: () => void;
  onBack?: () => void;
}

export default function QuestionScreen({
  title,
  options,
  selected,
  onSelect,
  onNext,
  onBack,
}: QuestionScreenProps) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {onBack && (
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={{ fontSize: 18 }}>←</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>

      {options.map((opt) => (
        <TouchableOpacity
          key={opt.value}
          style={styles.option}
          onPress={() => onSelect(opt.value)}
        >
          <RadioButton
            value={opt.value}
            status={selected === opt.value ? "checked" : "unchecked"}
            onPress={() => onSelect(opt.value)}
          />
          <Text style={styles.optionLabel}>{opt.label}</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.subtext}>
        Usamos esta información para calcular tus necesidades y que tengas recomendaciones personalizadas
      </Text>

      <TouchableOpacity style={styles.button} onPress={onNext}>
        <Text style={styles.buttonText}>Siguiente</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#fff",
    minHeight: "100%",
  },
  backButton: {
    position: "absolute",
    top: 30,
    left: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    elevation: 2,
  },
  optionLabel: {
    fontSize: 16,
  },
  subtext: {
    fontSize: 12,
    color: "gray",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#c97aff",
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
