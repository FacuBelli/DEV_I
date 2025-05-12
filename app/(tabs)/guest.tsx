// app/(tabs)/guest.tsx
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import GuestHome from '../guest_home';
import React from 'react';

type TabBarIconProps = {
  color: string;
  size: number;
  focused: boolean;
};

export default function GuestTab() {
  return <GuestHome />;
}

GuestTab.options = {
  tabBarLabel: 'Inicio',
  tabBarIcon: ({ color, size }: TabBarIconProps) => (
    <Ionicons name="home-outline" color={color} size={size} />
  ),
};
