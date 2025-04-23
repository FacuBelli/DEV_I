import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import QuestionScreen from "../../components/ui/QuestionScreen";
import questions from "../constants/questions";
import React from "react";

export default function QuestionnaireStep() {
  const { step } = useLocalSearchParams();
  const currentStep = parseInt(step as string);

  const question = questions.find((q) => q.id === currentStep);
  if (!question) return <View><Text>Pregunta no encontrada</Text></View>;

  return (
    <QuestionScreen
      title={question.title}
      options={question.options}
      step={currentStep}
      total={questions.length}
    />
  );
}
