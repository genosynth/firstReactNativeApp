import { Text, View, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'

const DayThree = () => {
  return (
    <ScrollView>
    <Text style={styles.headers}>Legs</Text>

    <View> 
      <View style={styles.container}>
        <Text style={styles.subHeaders}>Excersise 1 - Squats</Text>
        <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/BARBELL-SQUAT.gif',
          }}
        />
      </View>       
       
      <View style={styles.container}>
        <Text style={styles.subHeaders}>Excersise 2 - Lunges</Text>
        <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lunge.gif',
          }}
        />
      </View> 
      
      <View style={styles.container}>
        <Text style={styles.subHeaders}>Excersise 3 - Leg Dumbell Curl</Text>
        <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2022/04/Lying-Dumbbell-Leg-Curl.gif',
          }}
        />
      </View>
       
      <View style={styles.container}>
        <Text style={styles.subHeaders}>Excersise 4 - Leg Extensions</Text>
        <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/LEG-EXTENSION.gif',
          }}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.subHeaders}>Excersise 5 - Calf Raises</Text>
        <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Calf-Raise.gif',
          }}
        />

      </View>
        
       
    </View> 
    


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
export default DayThree