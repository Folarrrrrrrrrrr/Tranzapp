import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import { Poppins_200ExtraLight, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'

export default function OnboardingScreen() {
  let  [fontsLoaded, fontsError] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_200ExtraLight,
  })

  if(!fontsLoaded && !fontsError){
    return null
  }return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <View>
      <Text>  OnboardingScreen </Text>
    </View>
    </View>
  )
}

// const styles = StyleSheet.create({})