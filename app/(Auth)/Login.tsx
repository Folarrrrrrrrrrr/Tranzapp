import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View, Text } from 'react-native';

export default function AuthLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView>
      <ScrollView>
        <View >
           <Text> Login </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

