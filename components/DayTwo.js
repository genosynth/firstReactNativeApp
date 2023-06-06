import { Text, View, ScrollView, StyleSheet, Image, Button } from 'react-native'
import React, { Component } from 'react'

function DayTwo({route}) {

  let addPoints = route.params.addPoints
  

  return (
    <ScrollView>                      
 

    <View>
        <Text style={styles.headers}>Back</Text>
        <View style={styles.container}>
          <Text style={styles.subHeaders}>Excersise 1 - Standing Dumbell Rows</Text>
          <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Bent-Over-Dumbbell-Row.gif',
          }}
          />
          <Text>
          The dumbbell upright row is a compound exercise that targets muscle groups in your shoulders and upper back. 
          Perform dumbbell upright rows by grabbing a pair of dumbbells with an overhand grip and lifting them vertically in front
           of you until they reach shoulder height.
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.subHeaders}>Excersise 2 - Dumbell Bent Over Reverse Grip Rows</Text>
          <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/10/Dumbbell-Bent-Over-Reverse-Row.gif',
          }}
          />
          <Text>
            Let the dumbbells slide down your thighs until they're just below knee height with the palms facing outwards infront of you. 
            Execute by pulling the dumbbells up under your chest as far as possible. 
            Pause, and then slowly lower the dumbbells back to the starting position.
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.subHeaders}>Excersise 3 - Seated Cable Row </Text>
          <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/close-grip-cable-row.gif',
          }}
          />
          <Text>
            Set the appropriate weight on the weight stack and attach a close-grip bar or V-bar to the seated row machine.
            Grasp the bar with a neutral grip (palms facing in).
            Keeping your legs slightly bent and your back straight, pull the weight up slightly off the stack. 
            You should be sitting straight upright with your shoulders back. This is the starting position.
            Keeping your body in position, pull the handle into your stomach.
            Pull your shoulder blades back, squeeze, pause, and then slowly lower the weight back to the starting position.
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.subHeaders}>Excersise 4 - Lat Pull Downs</Text>
          <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif',
          }}
          />
          <Text>
          While seated, you pull a hanging bar toward you to reach chin level, then release it back up with control for one repetition. 
          Try to not use momentum when bringing the weight down so keep a light weight at first then work your way up. Also try to keep your back straight.
          </Text>
        </View>



       
               
    </View>

    <View>
        <Text style={styles.headers}>Biceps</Text>

        <View style={styles.container}>
          <Text style={styles.subHeaders}>Excersise 1 - Standing Alternate Curls</Text>
          <Image
            style={styles.photo}
            source={{
              uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Curl.gif',
            }}
          />
          <Text>
            Starting with your weakest arm (usually the left), curl the dumbbell up as far as possible. 
            Squeeze the bicep at the top of the exercise, and then slowly lower the weight down without it touching your body or taking the tension off your bicep. 
            Repeat for the other arm. That's one rep.
          </Text>
        </View>
        

        <View style={styles.container}>
          <Text style={styles.subHeaders}>Excersise 2 - Seated Incline Dumbell Curls</Text>
          <Image
            style={styles.photo}
            source={{
              uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Incline-Dumbbell-Curl.gif',
            }}
          />
          <Text>
            Perform incline dumbbell curls by sitting on an incline bench set to a 45- or 60-degree angle. 
            Hold a pair of dumbbells at your side.
            Squeeze your biceps and bend your elbows to lift the dumbbells to shoulder level, then lower them again. 
            Repeat this movement for the desired number of reps
          </Text>
        </View>
        

        <View style={styles.container}>
         <Text style={styles.subHeaders}>Excersise 3 - Hammer Curls</Text>
         <Image
            style={styles.photo}
            source={{
              uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Hammer-Curl.gif',
            }}
          />
          <Text>
            Hammer curls are biceps curls performed with your hands facing each other. 
            They're beneficial to add mass to your arms and can help focus more attention on the short head of the biceps.
            They may be easier to tolerate than the traditional biceps curl.
          </Text>
 
        </View>
        
    </View>
    
    <Button onPress={()=>{addPoints()}} title='Complete'></Button>


  </ScrollView>
)
  
}

const styles = StyleSheet.create({

  container:{
    borderWidth: 1,
    borderColor: "black",
    padding:8

  },

  headers:{
    fontSize:30, 
    fontWeight:"bold"   
  },

  subHeaders:{
    fontSize:18,
    fontWeight:"bold"
  },

  photo: {
    width: 400,
    height: 400,
  }
});

export default DayTwo
