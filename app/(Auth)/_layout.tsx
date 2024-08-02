import { Stack, Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { StatusBar } from 'expo-status-bar';

export default function AuthLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Stack>
          <Stack.Screen name='Login' options={{ headerShown:false}}/>
          <Stack.Screen name='Register' options={{ headerShown:false}}/>
          <StatusBar backgroundColor='#161622' style='light' />
      </Stack> 
   </>
  )
}