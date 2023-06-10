import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Profile = ({route}) => {

    const points = route.params.points
    const dateStarted = route.params.dateStarted
  
    const divisor = 4 + (Math.floor(points/8))

    const progress = () =>{// returns number of days since started working out
      const date = Date.now()
      const difference = date - dateStarted
      const days = Math.floor(difference/86400000) // converts milliseconds to days
      const weeks = Math.floor(days/7) // convert days to weeks
      const avgWorkoutsPerWeek = Math.floor(points/weeks)
      console.log(dateStarted)

      if(weeks<1 || dateStarted==0) return "You will be evaluated weekly with how many workouts you actually do in a week. Check next week for your first update & good luck in your fitness journey."
      
      let tempStatus = ""
      
      switch(avgWorkoutsPerWeek) {
        
        case 0:
          return tempStatus= "Terrible, you need to start actually putting the effort and incorporate the workout days in your routine."
          break;
        case 1:
          return tempStatus= "Can definately do better."
          break;
        case 2:
          return tempStatus= "You are on the right track here, try to incorporate some more days in a week for more results."         
          break;
        case 3:
          return tempStatus= "I see you have been working out quite consistently"
          break;  
        case 4:
          return tempStatus="Congratulations, you seem to be working out frequently each week without any excuses. Keep up the good work gains will come! :)"
          // code block
        default:
        return tempStatus="Well Done! You seem to be going the extra mile and incorporating more training in your routine."
      }   

      
    }

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Current Level</Text>
        <Text style={styles.text}>{Math.ceil(points/divisor)}</Text>
       <Text style={styles.text}>Workouts Completed</Text>
       <Text style={styles.text}>{points}</Text>
       <Text style={styles.text}> {progress()}  </Text>
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
      padding:5
       
    },
  
    anatomyPhoto: {
      width: 300,
      height: 200,
    },
  
    text:{
      fontSize:30,
      textAlign: 'center',
      padding:10,     
    
    },
  
  
  });

export default Profile