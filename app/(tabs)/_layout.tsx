// app/_layout.tsx
import React, { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";
import { View, ActivityIndicator } from "react-native";
import { Slot } from "expo-router";
import NoConnection from "../no_connections"; 

export default function Layout() {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected && state.isInternetReachable);
    });

    // Verificación inicial
    NetInfo.fetch().then((state) => {
      setIsConnected(state.isConnected && state.isInternetReachable);
    });

    return () => unsubscribe();
  }, []);

  if (isConnected === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#C24DD0" />
      </View>
    );
  }

  if (!isConnected) {
    return <NoConnection />;
  }

  return <Slot />;
}
