import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Title({ children }) {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    marginTop: 100,
  },
})