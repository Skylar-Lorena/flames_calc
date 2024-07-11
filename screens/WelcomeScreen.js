import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, StatusBar } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Flames Love Calculator!</Text>
      <Text>Enter the names of two people to find out their relationship compatibility using the FLAMES method.</Text>
      <TouchableOpacity>
        <Text>Get Started</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
  
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
