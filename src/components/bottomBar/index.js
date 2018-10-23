import * as React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bottomBarLabel: {
    fontSize: 20,
    textAlign: 'center',
  },  
});

export function createBottomBarOptions(text) {
  return {
    tabBarLabel: ({ tintColor }) => (
      <Text style={[styles.bottomBarLabel, { color: tintColor }]}>{text}</Text>
    ),
    tabBarOptions: {
      inactiveTintColor: '#30364580',
      activeTintColor: '#ff764a',
      style: {
        backgroundColor: '#ffffff',
      },
    },
  };
}
