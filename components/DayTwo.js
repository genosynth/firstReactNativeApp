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
        </View>

        <View style={styles.container}>
          <Text style={styles.subHeaders}>Excersise 4 - Lat Pull Downs</Text>
          <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif',
          }}
          />
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
        </View>
        

        <View style={styles.container}>
          <Text style={styles.subHeaders}>Excersise 2 - Seated Incline Dumbell Curls</Text>
          <Image
            style={styles.photo}
            source={{
              uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Incline-Dumbbell-Curl.gif',
            }}
          />
        </View>
        

        <View style={styles.container}>
         <Text style={styles.subHeaders}>Excersise 3 - Hammer Curls</Text>
         <Image
            style={styles.photo}
            source={{
              uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Hammer-Curl.gif',
            }}
          />
 
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
