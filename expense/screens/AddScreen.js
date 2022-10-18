import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Color from '../constants/Color'

export default function AddScreen() {
  return (
    <View style={styles.screen}>
      <Text>AddScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: Color.Bgc,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
})