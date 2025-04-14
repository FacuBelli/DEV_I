import React, { useState } from "react";
import { useRouter } from "expo-router";
import QuestionScreen from "../components/QuestionScreen";

export default function Question1() {
  const router = useRouter();
  const [selected, setSelected] = useState("");

  const handleNext = () => {
    if (selected) {
      // Guardar respuesta si es necesario
      router.push("/question2");
    }
  };

  return (
    <QuestionScreen
      title="¿Cuál es tu habilidad en la cocina ?"
      options={[
        { label: "Bajo (recién empiezo)", value: "bajo" },
        { label: "Medio (me defiendo bien)", value: "medio" },
        { label: "Alto (soy todo un chef)", value: "alto" },
      ]}
      selected={selected}
      onSelect={setSelected}
      onNext={handleNext}
    />
  );
}
