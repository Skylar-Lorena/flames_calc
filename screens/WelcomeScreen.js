import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import heartImg from '../assets/heartImg.jpg';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
        <Image source= {heartImg}
        style={styles.heroImg}/>
      <Text style={styles.titleText}>Welcome to Flames Love Calculator!</Text>
      < Text style={styles.descriptionText}>Enter the names of two people to find out their relationship compatibility using the FLAMES method.</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <Text style={styles.sampleTitle}>Sample Results</Text>
        <FlatList data={[
            {fname: 'Rahul', sname: 'Shefali', result: 'MARRIAGE'},
            {fname: 'Ryan', sname: 'Nelly', result: 'ANIMALS'},
            {fname: 'Masaa', sname: 'Njiru', result: 'FRIENDS'}
        ]}
        renderItem={({item})=> (
            <View>
                <Text>{item.fname} & {item.sname}: {item.result}</Text>
            </View>
        )}
        />
    </View>
  );
  
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEDB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  descriptionText:{
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#333',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  buttonText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  heroImg: {
    height: 200,
    width: 200,
    marginBottom: 20,
  },
  button: {
    height: 50,
    width: 200,
    borderRadius: 15,
    backgroundColor:'#ffbd9b',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20

  }
});
//to-do-style for  sample results and complete welcome page