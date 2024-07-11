import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Constants from 'expo-constants';

export default LoveCalculator = () => {
  const [maleName, setMaleName] = useState('');
  const [femaleName, setFemaleName] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [flamesResult, setFlamesResult] = useState(null);

  const calculateLove = async () => {
    const API_URL = `https://flames-love-calculator.p.rapidapi.com/flame/${maleName}/${femaleName}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'bfbdf2878cmsh4edd65a2a1bb0ffp168e2fjsn08e891f3dd9c',
        'x-rapidapi-host': 'flames-love-calculator.p.rapidapi.com'
      }
    };

    setLoading(true);
    try {
      const response = await fetch(API_URL, options);
      const result = await response.json();  // Parse the response as JSON
      console.log(result);  // Log the result to verify its structure
      setFlamesResult(result);  // Update state with the parsed result
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
    // setFemaleName('')
    // setMaleName('')
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Flames Love Calculator</Text>
      </View>
      <TextInput
        placeholder='Male Name'
        value={maleName}
        onChangeText={(text) => setMaleName(text)}
        style={styles.input}
      />
      <TextInput
        placeholder='Female Name'
        value={femaleName}
        onChangeText={(text) => setFemaleName(text)}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={calculateLove}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
      <View style={styles.round}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          flamesResult && (
            <Text style={styles.result}>{flamesResult.result}</Text>
          )
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEEDB',
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    height: 80,
    width: '100%',
    backgroundColor: '#0a1d37',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    height: 55,
    margin: 15,
    padding: 10,
    borderRadius: 15,
    fontSize: 18,
    borderWidth: 1,
  },
  button: {
    height: 50,
    margin: 15,
    borderWidth: 1 / 2,
    width: '90%',
    borderRadius: 15,
    fontSize: 18,
    backgroundColor: '#ffbd9b',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
  },
  result: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  round: {
    height: 100,
    width: 250,
    borderRadius: 50,
    backgroundColor: '#ffd8cc',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  conclusion: {
    padding: 40,
  },
});