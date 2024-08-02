import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
// import { View } from 'react-native-reanimated/lib/typescript/Animated';
import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import { MouseEvent } from "react";
import { useFormContext } from "@/components/FormProvider";

export default function RegistrationScreen() {
    return(
      <SafeAreaView>
      <ScrollView>
        <View >
           <Text> Register </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  alignCenter: {
    alignItems: "center",
    alignContent: "center",
  },
  whiteButton: {
    backgroundColor: "white",
    width: 150,
    alignSelf: "center",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
