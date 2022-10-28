import { View, StyleSheet } from 'react-native'
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from 'react'
import Color from '../../constants/Color';

export default function IconButton({ icon, size, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
      android_ripple={{ color: Color.Grey, foreground: true }}
    >
      <View style={styles.buttonContainer}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
    margin: 8,
  },
  pressed: {
    opacity: 0.75,
  },
})