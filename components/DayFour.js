import { Text, View, ScrollView, StyleSheet, Image, Button } from 'react-native'
import React, { Component } from 'react'

function DayFour({route}) {

  let addPoints = route.params.addPoints

  return (
    <ScrollView>
    
    <View>
        <Text style={styles.headers}>Shoulders</Text>

        <View style={styles.container}>
          <Text style={styles.title}>Exercise 1</Text>
          <Text style={styles.info}>{'\u2023'} 2 Warmup Sets </Text>
          <Text style={styles.info}>{'\u2023'} 4 Sets - Last set being a Drop Set</Text>
          <Text style={styles.subHeaders}>Shoulder Presses</Text>
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
          <Text style={styles.subHeaders}>Lever Shoulder Press (Machine Version)</Text>
          <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/04/Lever-Shoulder-Press.gif',
          }}
          />
        </View>
        
        <View style={styles.container}>
          <Text style={styles.title}>Exercise 2</Text>
          <Text style={styles.info}>{'\u2023'} 3 Sets - Last set being a Drop Set</Text>
          <Text style={styles.subHeaders}>Side Lateral Raises</Text>
          <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif',
          }}
          />
          <Text>
          Stand with your feet around shoulder-width apart, holding a dumbbell in each hand by your sides, palms facing inwards. 
          Engage your core and squeeze your glutes to provide a strong base, and then raise your arms out to the sides, 
          stopping when your arms are parallel with the floor. Make sure you are using very light weight for this one. Usually you would want to start with no more than 4kgs on each arm as this one is difficult.
          </Text>
        </View>
       
        <View style={styles.container}>
         <Text style={styles.title}>Exercise 3</Text>
         <Text style={styles.info}>{'\u2023'} 3 Sets</Text>
         <Text style={styles.subHeaders}>Rear Delt Raise</Text>
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
          <Text style={styles.subHeaders}>Rear Dealt Fly (Machine Version)</Text>
          <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Rear-Delt-Machine-Flys.gif',
          }}
          />
        </View>
                
       
    </View>

    <View>
        <Text  style={styles.headers}>Abdominals</Text>

                
        <View style={styles.container}>
          <Text style={styles.title}>Exercise 1</Text>
          <Text style={styles.info}>{'\u2023'} 3 Sets</Text>
          <Text style={styles.subHeaders}>Crunches</Text>
          <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2015/11/Crunch.gif',
          }}
          />         
          <Text>
            Bend your knees and place your arms across your chest. Contract your abs and inhale.
            Exhale and lift your upper body, keeping your head and neck relaxed. Inhale and return to the starting position.
          </Text>

          <Text style={styles.subHeaders}>Seated Crunch Machine (Machine Version)</Text>
          <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/09/Seated-Crunch-Machine.gif',
          }}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Exercise 2</Text>
          <Text style={styles.info}>{'\u2023'} 3 Sets</Text>
          <Text style={styles.subHeaders}>Bicycle Crunches</Text>
          <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Bicycle-Crunch.gif',
          }}
          />
          <Text>
            Raise your knees to a 90-degree angle and alternate extending your legs as if pedaling a bike. 
            Twist your body to touch your elbow to the opposite knee with each pedal motion. 
            With proper form, bicycle crunches can increase core strength while adding a cardio element to your ab exercise routine.
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Exercise 3</Text>
          <Text style={styles.info}>{'\u2023'} 3 Sets</Text>
          <Text style={styles.subHeaders}>Cross Body Mountain Climbers</Text>
          <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2022/07/Cross-Body-Mountain-Climber.gif',
          }}
          />
          <Text>
            Start in a high plank position, shoulders over wrists, core engaged so body forms a straight line from shoulders to hips to heels. 
            Engage your glutes and thighs to keep your legs straight. Drive your right knee in toward your chest, then quickly step it back to plank position.
          </Text>
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
    fontSize:50, 
    fontWeight:"bold",
    textAlign:'center'
  },

  title:{
    fontSize:35, 
    fontWeight:"bold"  

  },

  subHeaders:{
    fontSize:18,
    fontWeight:"bold"
  },

  photo: {
    width: 400,
    height: 400,
  },  info:{
    fontSize:20
  }
});

export default DayFour
