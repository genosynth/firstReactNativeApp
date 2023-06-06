import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Profile = ({route}) => {

    const points = route.params.points

    const divisor = 4 + (Math.floor(points/8))
  return (
    <View>
        <Text style={styles.text}>Current Level - {Math.ceil(points/divisor)}</Text>
       <Text style={styles.text}>Workouts Completed - {points}</Text>
       <Text style={styles.text}> Most Missed Workout - </Text>
    </View>
  )
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
  
  
  });

export default Profile