import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MainButton({ children, onPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable
        android_ripple={{ color: '#223355', foreground: true }}
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
        >
        <View style={[styles.button, (mode === 'negative') ? styles.flat : null]}>
          <Text style={[styles.buttonText, (mode === 'negative') ? styles.flatText : null]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: '#3e04c3',
    minWidth: 80,
  },
  flat: {
    backgroundColor: 'transparent'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  flatText: {
    color: '#3e04c3',
  },
  pressed: {
    opacity: 0.75,
    borderRadius: 4,
    backgroundColor: '#c6affc',
  }

});