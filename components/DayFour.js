import { Text, View, ScrollView, StyleSheet, Image } from 'react-native'
import React, { Component } from 'react'

function DayFour({navigation}) {
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
        </View>
        
        <View style={styles.container}>
          <Text style={styles.subHeaders}>Excersise 2 - Side Lateral Raises</Text>
          <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif',
          }}
          />
        </View>
       
        <View style={styles.container}>
         <Text style={styles.subHeaders}>Excersise 3 - Rear Delt Raise</Text>
         <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Rear-Lateral-Dumbbell-Raise.gif',
          }}
          />
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
