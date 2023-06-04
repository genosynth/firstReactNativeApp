import { Text, View, ScrollView, StyleSheet, Image, Button } from 'react-native'
import React, { Component } from 'react'

function DayFour({route}) {

  let addPoints = route.params.addPoints

  return (
    <ScrollView>
    
    <View>
        <Text style={styles.headers}>Shoulders</Text>

        <View style={styles.container}>
          <Text style={styles.subHeaders}>Excersise 1 - Shoulder Presses</Text>
          <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shoulder-Press.gif',
          }}
          />
          <Text>
          Taking a dumbbell in each hand, stand shoulder width apart with the hips and spine in a neutral position.
           Lift the dumbbells so that they are positioned in between your shoulders and ears, palms facing forward. 
           Engage your core and extend your arms to press the dumbbells above your head.
          </Text>
        </View>
        
        <View style={styles.container}>
          <Text style={styles.subHeaders}>Excersise 2 - Side Lateral Raises</Text>
          <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif',
          }}
          />
          <Text>
          Stand with your feet around shoulder-width apart, holding a dumbbell in each hand by your sides, palms facing inwards. 
          Engage your core and squeeze your glutes to provide a strong base, and then raise your arms out to the sides, 
          stopping when your arms are parallel with the floor.
          </Text>
        </View>
       
        <View style={styles.container}>
         <Text style={styles.subHeaders}>Excersise 3 - Rear Delt Raise</Text>
         <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Rear-Lateral-Dumbbell-Raise.gif',
          }}
          />
          <Text>
          Sit down, lean forward and hold a dumbbell in either hand so that they're resting above your feet.
           Stay bent forward as you raise your arms to the side, lining the dumbbells with your shoulders. Bring the weights back down and repeat.
          </Text>
        </View>
                
       
    </View>

    <View>
        <Text  style={styles.headers}>Abdominals</Text>

        <View style={styles.container}>
          <Text style={styles.subHeaders}>Excersise 1 - Crunches</Text>
          <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2015/11/Crunch.gif',
          }}
          />
        </View>
        
        <View style={styles.container}>
          <Text style={styles.subHeaders}>Excersise 2 - Cable Kneeling Crunch</Text>
          <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Kneeling-Cable-Crunch.gif',
          }}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.subHeaders}>Excersise 3 - Bicycle Crunches</Text>
          <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Bicycle-Crunch.gif',
          }}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.subHeaders}>Excersise 4 - Cross Body Mountain Climbers</Text>
          <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2022/07/Cross-Body-Mountain-Climber.gif',
          }}
          />
        </View>
    </View>
    
    <Button color="green" onPress={()=>{addPoints()}} title='Complete'></Button>

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

export default DayFour
