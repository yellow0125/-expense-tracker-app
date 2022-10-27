import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Row({children, style}) {
  return (
    <View style={[styles.default_style, style]}>
			{children}
		</View>
  )
}

const styles = StyleSheet.create({
	default_style: {
		flexDirection: 'row',
	}
});