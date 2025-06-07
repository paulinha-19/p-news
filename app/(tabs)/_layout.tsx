import { Tabs } from 'expo-router';
import React from 'react';
import { Pressable, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerTintColor: Colors.light.text,
        headerStyle: { backgroundColor: Colors.light.tint },
        headerRight: () => (
          <Pressable onPress={() => { }} style={{ marginRight: 16 }}>
            <Ionicons name="search-outline" size={20} color={Colors.dark.text} />
          </Pressable>
        ),
      }}>
      <Tabs.Screen
        name="home/index"
        options={{
          title: '',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={size}
            />
          ),
          headerLeft: () => (
            <Image
              source={require('../../assets/images/logo-1.png')}
              style={{ width: 60, height: 60, marginLeft: 16 }}
              resizeMode="contain"
            />
          )
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',

        }}
      />
    </Tabs>
  );
}
