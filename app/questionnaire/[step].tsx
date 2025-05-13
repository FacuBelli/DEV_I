import React, { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, Alert } from "react-native";
import * as FileSystem from "expo-file-system";
import QuestionScreen from "../../components/ui/QuestionScreen";
import questions from "../constants/questions";

export default function QuestionnaireStep() {
  const router = useRouter();
  const { step } = useLocalSearchParams();
  const currentStep = parseInt(step as string);

  const question = questions.find((q) => q.id === currentStep);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  if (!question) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Pregunta no encontrada</Text>
      </View>
    );
  }

  const handleNext = async (selectedOption: string) => {
    const updatedAnswers = { ...answers, [currentStep]: selectedOption };
    setAnswers(updatedAnswers);

    const nextStep = currentStep + 1;
    const isLast = nextStep > questions.length;

    if (isLast) {
      try {
        const content = Object.entries(updatedAnswers)
          .map(([key, val]) => `Pregunta ${key}: ${val}`)
          .join("\n");

        const fileUri = FileSystem.documentDirectory + "respuestas.txt";
        await FileSystem.writeAsStringAsync(fileUri, content);

        Alert.alert("¡Cuenta creada con éxito!", "Tus respuestas se guardaron correctamente.", [
          {
            text: "Aceptar",
            onPress: () => router.replace("/(tabs)/guest_home"),
          },
        ]);
      } catch (error) {
        Alert.alert("Error", "No se pudo guardar el archivo.");
        console.error("Error escribiendo archivo:", error);
      }
    } else {
      router.push(`/questionnaire/${nextStep}`);
    }
  };

  return (
    <QuestionScreen
      title={question.title}
      options={question.options}
      step={currentStep}
      total={questions.length}
      onNext={handleNext}
    />
  );
}
