import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Row from '../UI/Row'
import { useNavigation } from '@react-navigation/native';
export default function ExpensesItem({ expense }) {

  const navigation = useNavigation()

  function itemPressed() {
    navigation.navigate('EditScreen', {
			expenseId: expense.key
		});
  }

  return (
    <Pressable
      onPress={itemPressed}
      android_ripple={{ color: '#223355', foreground: true }}
      style={({ pressed }) => [
        pressed ? styles.pressed : null,
      ]}>
      <Row style={[styles.row, styles.expenseItem]}>
        <View >
          <Text style={[styles.textBase, styles.description]}>{expense.description}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{expense.amount.toFixed(2)}</Text>
        </View>
      </Row>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
  },
  expenseItem: {
    padding: 10,
    backgroundColor: '#3e04c3',
    marginVertical: 4,
    borderRadius: 6,
    elevation: 3,
    shadowColor: '#39324a',
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4

  },
  textBase: {
    color: '#e4d9fd'
  },
  amount: {
    color: '#3e04c3',
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    // paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 80,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.75,
  }
});