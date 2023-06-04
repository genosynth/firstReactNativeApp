import { Text, View, ScrollView, StyleSheet, Image, Button } from 'react-native'
import React from 'react'

const DayThree = ({route}) => {

  let addPoints = route.params.addPoints

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
        <Text>
        The Squat is an exercise in which a standing person lowers to a position in which the torso is erect and the knees are deeply bent 
        and then rises to an upright position. Note: A squat can be done while holding weights, with a barbell on the upper back, or without weights.
        Also knees shouldn't go much past your feet.
        </Text>
      </View>       
       
      <View style={styles.container}>
        <Text style={styles.subHeaders}>Excersise 2 - Lunges</Text>
        <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lunge.gif',
          }}
        />
        <Text>
        Bend the knees and lower your body until the back knee is a few inches from the floor. 
        At the bottom of the movement, the front thigh is parallel to the ground, 
        the back knee points toward the floor, and your weight is evenly distributed between both legs.
        Push back up to the starting position, keeping your weight on the heel of the front foot.
        </Text>
      </View> 
      
      <View style={styles.container}>
        <Text style={styles.subHeaders}>Excersise 3 - Leg Dumbell Curl</Text>
        <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2022/04/Lying-Dumbbell-Leg-Curl.gif',
          }}
        />
        <Text>
        The hamstring curl, also called a leg curl, is an exercise that strengthens the hamstrings. 
        It involves bending your knees and moving your heels toward your butt while the rest of your body stays still. 
        Typically, the exercise is done on a leg curl machine but can also be done with a dumbell.
        </Text>
      </View>
       
      <View style={styles.container}>
        <Text style={styles.subHeaders}>Excersise 4 - Leg Extensions</Text>
        <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/LEG-EXTENSION.gif',
          }}
        />
        <Text>
        Leg extensions are done on a leg extension machine. 
        You sit on the machine with a weighted pad on top of your lower legs.
         Then you use your quads to repeatedly extend your knees and lift your lower legs.
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.subHeaders}>Excersise 5 - Calf Raises</Text>
        <Image
          style={styles.photo}
          source={{
            uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Calf-Raise.gif',
          }}
        />
        <Text>
        The calf raise, also known as the standing calf raise, is an exercise that targets the muscle groups in your lower legs. 
        Perform calf raises by standing tall with your feet hip-width apart. 
        Lift your body by pushing into the fronts of your feet, activating your calf muscles as you stand on your tiptoes.
        </Text>
      </View>
        
       
    </View> 
    
    <Button color="red" onPress={()=>{addPoints()}} title='Complete'></Button>     

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