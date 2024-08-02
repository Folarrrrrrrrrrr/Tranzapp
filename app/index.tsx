import { Image, StyleSheet, Platform, ScrollView, View,Text,} from 'react-native';
// import { View } from 'react-native-reanimated/lib/typescript/Animated';
import { TouchableOpacity} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Link} from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.container}> 
      <ScrollView contentContainerStyle ={{height:'100%'}} >
      <View style={styles.container}> 
          {/* <ThemedText type="title" >Tranzapp!</ThemedText> */}
          <Text style={{textAlign:'center'}}> Monitor your money,</Text>
          <Text style={{textAlign:'center'}}> secure your transactions, </Text>
          <Text style={{textAlign:'center'}}> and grow your savings. </Text>
          <Link href='/Register' style={styles.blackButton}> Sing Up </Link>
          <Link href='/Login' style={styles.blackButton}> Login </Link>
          <Text>Or</Text>
          {/* <ThemedText type="link" > Continue with Google </ThemedText> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'white'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  alignCenter:{
    alignItems: 'center',
    alignContent: 'center',
  },
  blackButton:{
    margin:10,
    backgroundColor: 'black',
    textAlign: 'center',
    color: 'white',
    width: 150,
    height: 25,
    justifyContent: "center",
    alignSelf: 'center',
    borderBottomRightRadius: 14,
    borderTopLeftRadius : 14
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
    position: 'absolute',
  },
});