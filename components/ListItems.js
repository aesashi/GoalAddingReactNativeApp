import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
 } from 'react-native';

export default function ListItems(props) {




  return (
  <View style={styles.goalItem}>
    <TouchableOpacity onPress={props.onDeleteItem.bind(this, props.id)}>
      <Text style={styles.goalText}>{props.text}</Text>
    </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
  goalItem:{
    padding: 8,
    margin: 8,
    borderRadius: 6,
    backgroundColor: 'white',

  },
  goalItemText: {
    color: "#2baeeb",
    padding: 8,

  },
});
