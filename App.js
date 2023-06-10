import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Button } from 'react-native';
import DayOne from './components/DayOne';
import DayTwo from './components/DayTwo';
import DayThree from './components/DayThree';
import DayFour from './components/DayFour';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from './components/Profile';
import Instructions from './components/Instructions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogBox } from 'react-native';

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

 function HomeScreen({navigation}) { 

  const [points, setPoints] = useState(0)
  const [dateStarted, setDateStarted] = useState(0)

  

 
  const addPoints = () => {
    setPoints(points+1)
   // AsyncStorage.setItem('data', points)

   if(dateStarted==0){
    setDateStarted(Date.now())
    setDateStartedToStorage(Date.now)
   }

    const storeData = async (value) => {
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('data', jsonValue)
      } catch (e) {
        // saving error
      }
    }

    storeData(points)
    return alert("Congratulations for completing this workout!")
  }

  
   
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('data')
      if(!jsonValue) return
      setPoints(JSON.parse(jsonValue)+1)
     
    } catch(e) {
      // error reading value
    }
  }
  
  
  const setDateStartedToStorage = async (value) =>{
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('date-started', jsonValue)
    } catch (e) {
      // saving error
    }

  }

 

    const getDateStartedFromStorage = async () =>{

          try {
        const jsonValue = await AsyncStorage.getItem('date-started')
        if(!jsonValue) return
        setDateStarted((jsonValue))
        return jsonValue
        //console.log((jsonValue))
        
       
      } catch(e) {
        // error reading value
      }
    }
 
 

 
  useEffect(()=>{
    
    getData()
    getDateStartedFromStorage()  
    //console.log(dateStarted)
    

   const deleteStorage = async (key)=> {
      try {
          await AsyncStorage.removeItem(key);
          return true;
      }
      catch(exception) {
          return false;
      }
  }

  //deleteStorage('date-started')
  },[])
  
 


  return ( 
    <ScrollView >
      <View style={styles.container}> 
        <Text style={styles.text}> Strong Foundation Workout Plan </Text>

        <View>
          <Button color="black" title="Go To Profile"
            onPress={()=>{ navigation.navigate("Profile",{
              points:points,
              dateStarted:dateStarted
            })

            }}
          ></Button>
          <View style={styles.buttonsSpace}></View>
          <Button title="See Instructions"
            onPress={()=>{ navigation.navigate("Instructions")

            }}
          ></Button>  
        </View> 
        

       
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
          onPress={() => navigation.navigate('Chest & Triceps',{            
            addPoints: ()=>{addPoints()}
          })} 
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
          onPress={() => navigation.navigate('Back & Biceps',{
            addPoints: ()=>{addPoints()}
          })} 
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
        <Button style={styles.button}
          color='red'     
          title="Start" 
          onPress={() => navigation.navigate('Legs',{
            addPoints: ()=>{addPoints()}
          })} 
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
          onPress={() => navigation.navigate('Shoulders & Abdominals', {
            addPoints: ()=>{addPoints()}
          })} 
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
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Instructions" component={Instructions}/>
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
  },

  
  buttonsSpace:{
    height:10

  },
  button:{
    
  }

});
