import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React, { Component } from 'react'

export class Instructions extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
            <Text style={styles.headers}>Instructions</Text>

            <View style={styles.subContainer}>
                <Text style={styles.subHeaders}>Warm Up Sets</Text>
                <Text>Consist of basically 2 sets where you do around 10-15 reps with really low weight that you could have easily done 20 repetitions with. This is used to warm up to muscles you are going to work and pumps blood into them.</Text>
                <Text>The important thing is taking it easy here and taking your time to rest between the 2 sets not jumping from the first set to the next set instantly.</Text>
            </View>
           
           <View style={styles.subContainer}>
                <Text style={styles.subHeaders}>Sets</Text>
                <Text>These will vary from 3 - 4, which you will aim to basically handle a weight where you can control with proper form. (No swinging or using momentum)</Text>
                <Text>For example you do an exercise of 3 sets and pick a weight for your first set which you can do from 10-15 repetitions without essentially going till failure (especially if it's the first exercise of your workout).</Text>
                <Text>For your second set you might want to increase the weight a little bit so that this time you will aim to do 8 - 12 repetitions and making you push your efforts till failure. Don't worry if the first set was already tough enough, it's okay to not increase the weight if you think that you are going to struggle to complete 8 repetitions)</Text>
                <Text>For your last set you are going to aim to give basically all the repetitions left in you for the exercise which will probably be around 8 repetitions (Well done if you can do more, you can consider increasing the weight for next time)</Text>
                <Text>You can increase the weight for your last set like you did in the second set but don't feel obliged to if you are struggling alot already. Remember that the most important thing is form as that will put really stress on the muscle and make it grow.</Text>
           </View>

           <View style={styles.subContainer}>
                <Text style={styles.subHeaders}>Drop Set</Text>
                <Text>This type of set will sometime be implemented in your last set of your exercise.
                You usually do your last set with your heaviest weight untill you reach failure and cannot do more.</Text>
                <Text>In a drop set after your last rep of your last set, you immediately decrease the weight by around 50% and do another set untill you reach failure again.
                Sometimes you will be able to do 8 - 10 (if lucky) and other times you will barely hit 4 repetitions.</Text>
                <Text>The dropset is a perfect way to keep stressing the muscle when already burnt out so it will leave the muscle destroyed for it to repair, thus grow.</Text>
           </View>
            
        </View>
        
      </ScrollView>
    )
  }
}



const styles = StyleSheet.create({

    container:{
        borderWidth: 1,
        borderColor: "black",
        padding:10
    
      },

      subContainer:{
        padding:10

      },
    
      headers:{
        fontSize:50, 
        fontWeight:"bold",
        textAlign:'center',
      
      },
    
      title:{
        fontSize:35, 
        fontWeight:"bold",
       
    
      },
    
      subHeaders:{
        fontSize:18,
        fontWeight:"bold",
        
      },
    
      photo: {
        width: 400,
        height: 400,
      },
    });
    

export default Instructions