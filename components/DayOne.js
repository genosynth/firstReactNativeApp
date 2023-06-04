import { StyleSheet, Text, View, ScrollView, Image , Button} from 'react-native'
//import YoutubeIframe from 'react-native-youtube-iframe'
import React, { Component } from 'react'


// <YoutubeIframe height={300} play={false} videoId={'SrqOu55lrYU'}/>
function DayOne({route}) {

  let addPoints = route.params.addPoints
  console.log(addPoints)
 

  return (
    <ScrollView>

    <View>

        <Text style={styles.headers}>Chest</Text>
        <View style={styles.container}>
          <Text style={styles.subHeaders}>Excersise 1 - Incline Bench Press</Text>
          
          <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Press.gif',
          }}
          />
         
          <Text>
          If you are using dumbells.
          Hold a dumbbell in each hand, with hands positioned at your shoulders, 
          elbows bent and angled down below your ribs. Relax your neck against the bench. Keep your feet flat on the floor.
          Brace your core and press both dumbbells straight over your chest as you exhale.
          </Text>
         
        </View>
       
        <View style={styles.container}>
          <Text style={styles.subHeaders}>Excersise 2 - Flat Bench Press</Text>
          <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bench-Press.gif',
          }}
          />
          
          <Text>
            If using dumbells,
            start by holding the dumbbells slightly wider than shoulder width apart above your shoulders. 
            Your palms should be facing forward. Slowly bend your elbows until they are at a 90 degree angle and your upper arms are parallel to the ground.
            Push the weights up by straightening your arms.
          </Text>
          
        </View>
        
        <View style={styles.container}>
          <Text style={styles.subHeaders}> Excersise 3 - Incline Chest Flies</Text>
          <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-dumbbell-Fly.gif',
          }}
          />
          <Text>
          Holding a pair of dumbbells, sit on a flat bench and slowly lower yourself back. 
          Keep a tight core as you push the dumbbells above your chest. 
          The dumbbells will be facing one another and held together. 
          With a slight bend in the elbow, open up your chest and slowly lower the dumbbells to the sides.
          </Text>
        </View>
        
        <View style={styles.container}>
          <Text style={styles.subHeaders}>Excersise 4 - Flat Chest Flies</Text>
          <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Fly.gif',
          }}
          />
          <Text>
            Holding a pair of dumbells, sit on a flat bench and slowly lower yourself back.
            Keep a tight core as you push the dumbells above your chest. The dumbells will be facing one another and held together.
            With a slight bend in the elbow, open up your chest and slowly lower the dumbells to the sides.
            When the dumbells are parallel with the gorund, pause, and return to the starting position.
          </Text>
        </View>
        
        <View style={styles.container}>
          <Text style={styles.subHeaders}>Excersise 5 - Push Ups</Text>
          <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Push-Up.gif',
          }}
          />
          <Text>
            Push-ups are an exercise in which a person, keeping a prone position,
             with the hands palms down under the shoulders, the balls of the feet on the ground, 
             and the back straight, pushes the body up and lets it down by an alternate straightening and bending of the arms.
          </Text>
        </View>

    </View>

    <View>
        <Text style={styles.headers} >Triceps</Text>
        <View style={styles.container}>
          <Text style={styles.subHeaders}>Excersise 1 - Tricep Pushdown</Text>
          <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2022/11/One-arm-triceps-pushdown.gif',
          }}
          />
          <Text>
            Attach a rope handle to the high pulley of a cable station (note that in the photo above it is shown done unilateraly - one handed). 
            Keeping your elbows tucked in at your sides grab the handle, 
            tense your core, and bring your hands down until your arms are fully extended, then return to the starting position. Only your forearms should move.
          </Text>
        </View>
       
        <View style={styles.container}>
          <Text style={styles.subHeaders}>Excersise 2 - Reverse Grip Pushdown</Text>
          <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Reverse-Grip-Pushdown.gif',
          }}
          />
           <Text>
             A pushdown is a tricep exercise where you extend your arms downward while standing upright. 
             And a reverse grip tricep pushdown is simply a variation where you hold your palms up.
          </Text>
        </View>
        
    </View>
    
    <Button color="gold" onPress={()=>{addPoints()}} title='Complete'></Button>


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


export default DayOne



  


