import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import heartImg from '../assets/heartImg.jpg';
import Constants from 'expo-constants';


export default WelcomeScreen = ({navigation}) => {
  return (
        <View style={styles.container}>
      <Image
        source={heartImg} // Use the imported image
        style={styles.heroImage}
      />
      <Text style={styles.titleText}>Welcome to Flames Love Calculator</Text>
      <Text style={styles.descriptionText}>
        Enter the names of two people to find out their relationship compatibility using the FLAMES method.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoveCalculator')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <Text style={styles.sampleTitle}>Sample Results:</Text>
      <FlatList
        data={[
          { fname: 'Rahul', sname: 'Shefali', result: 'MARRIAGE' },
          { fname: 'John', sname: 'Jane', result: 'FRIENDS' },
          { fname: 'Alice', sname: 'Bob', result: 'ENEMIES' },
        ]}
        keyExtractor={(item, index) => index.toString()}
        horizontal  // Display items horizontally
        contentContainerStyle={styles.flatListContainer}  // Apply styles to container
        renderItem={({ item }) => (
          <View style={styles.sampleItem}>
            <Text>{item.fname} & {item.sname}: {item.result}</Text>
          </View>
        )}
      />
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFEEDB',
    paddingTop: Constants.statusBarHeight,
  },
  heroImage: {
    width: 50,  // Adjust the width to fit the screen
    height: 60, // Adjust the height as needed
    marginBottom: 20,
  },
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#0a1d37',
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    color: '#333',
  },
  button: {
    height: 50,
    width: 200,
    borderRadius: 15,
    backgroundColor: '#ffbd9b',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  sampleTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0a1d37',
  },
  flatListContainer: {
    flexDirection: 'column',  // Arrange items vertically
    justifyContent: 'space-between',  // Distribute space evenly
    width: '100%',  // Full width of the container
    paddingHorizontal: 10,  // Add horizontal padding
    paddingLeft: 100,
    marginBottom:2,
  },
  sampleItem: {
    padding: 10,
    backgroundColor: '#ffd8cc',
    marginBottom: 4,
    borderRadius: 10,
    alignItems: 'center',
  },
});
