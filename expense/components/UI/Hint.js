import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Color from '../../constants/Color'

export default function Hint({ children }) {

  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: Color.White,
    fontSize: 38,
  },
})