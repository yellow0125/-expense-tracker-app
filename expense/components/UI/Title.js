import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Color from '../../constants/Color'

export default function Title({ children, num }) {
  return (
    <View>
      <Text style={[styles.title, { marginTop: num }]}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: Color.White,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
})