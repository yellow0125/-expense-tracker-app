import { StyleSheet, View } from 'react-native'
import React from 'react'

export default function Row({ children, style }) {
	return (
		<View style={[styles.screen, style]}>
			{children}
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		flexDirection: 'row',
	}
});