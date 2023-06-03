import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Button } from 'react-native';
import DayOne from './components/DayOne';
import DayTwo from './components/DayTwo';
import DayThree from './components/DayThree';
import DayFour from './components/DayFour';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

 function HomeScreen({navigation}) { 
  return ( 
    <ScrollView >
      <View style={styles.container}> 
        <Text style={styles.text}> Strong Foundation Workout Plan </Text> 
        
        <View style={styles.padder}>
        <Text style={styles.text}> Chest & Triceps</Text>     
        <Image
          style={styles.anatomyPhoto}
          source={{
            uri: 'https://www.fitliferegime.com/wp-content/uploads/2021/08/Know-More-About-Chest-And-Triceps-Muscles.webp',
          }}
        />
        <Button 
          color="gold"
          title="Start" 
          onPress={() => navigation.navigate('Chest & Triceps')} 
        /> 
        </View>
      
        <View style={styles.padder}>
        <Text style={styles.text}>Back & Biceps</Text>    
        <Image
          style={styles.anatomyPhoto}
          source={{
            uri: 'https://cdn.shopify.com/s/files/1/1214/5580/files/Muscle_Group_Back.jpg?v=1601050704',
          }}
        />
        <Button 
          title="Start" 
          onPress={() => navigation.navigate('Back & Biceps')} 
        /> 
        </View>

        <View style={styles.padder}>
        <Text style={styles.text}>Legs</Text>        
        <Image
          style={styles.anatomyPhoto}
          source={{
            uri: 'https://i.pinimg.com/564x/e2/6e/26/e26e260147fc9a958879306383c4f5be.jpg',
          }}
        />
        <Button  
          color='red'     
          title="Start" 
          onPress={() => navigation.navigate('Legs')} 
        />
        </View>

        <View style={styles.padder}>
        <Text style={styles.text}>Shoulders & Abs</Text>        
        <Image
          style={styles.anatomyPhoto}
          source={{
            uri: 'https://www.fitwirr.com/wp-content/uploads/2022/06/exercises-for-upper-and-lower-abs.jpg',
          }}
        />
        <Button 
          color='green'
          title="Start" 
          onPress={() => navigation.navigate('Shoulders & Abdominals')} 
        /> 
        </View>

      </View> 
    </ScrollView>
  );
}


export default function App() { 
  return ( 
    <NavigationContainer> 
      <Stack.Navigator> 
        <Stack.Screen name="Home Screen" component = {HomeScreen} /> 
        <Stack.Screen name="Chest & Triceps" component = {DayOne} /> 
        <Stack.Screen name="Back & Biceps" component = {DayTwo} /> 
        <Stack.Screen name="Legs" component = {DayThree} /> 
        <Stack.Screen name="Shoulders & Abdominals" component = {DayFour} /> 
      </Stack.Navigator> 
    </NavigationContainer> 
  );
}

const styles = StyleSheet.create({

  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,     
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 20,
     
  },

  anatomyPhoto: {
    width: 300,
    height: 200,
  },

  text:{
    fontSize:30,
    textAlign: 'center'
  },

  padder: {
    padding:30
  }
});
