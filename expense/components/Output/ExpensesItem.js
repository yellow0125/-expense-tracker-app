import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Row from '../UI/Row'
import { useNavigation } from '@react-navigation/native';
import Color from '../../constants/Color';
export default function ExpensesItem({ expense }) {

  const navigation = useNavigation()
  function itemPressed() {
    navigation.navigate('EditScreen', {
      expenseId: expense.key,
      amount: expense.amount,
      description: expense.description,
      isImportant: expense.isImportant
    });
  }

  return (
    <Pressable
      onPress={itemPressed}
      android_ripple={{ color: Color.Grey, foreground: true }}
      style={({ pressed }) => [
        pressed ? styles.pressed : null,
      ]}>
      <Row style={[styles.row, styles.itemBox]}>
        <View>
          <Text style={styles.description}>{expense.description}</Text>
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
  itemBox: {
    padding: 12,
    backgroundColor: Color.White,
    marginVertical: 10,
    borderRadius: 6,
    elevation: 3,
    shadowColor: Color.ShadowBg,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4
  },
  description: {
    color: Color.BgDarkGreen,
    fontSize: 18,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    borderRadius: 4,
    backgroundColor: Color.BgDarkGreen,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 80,
    height: 30
  },
  amount: {
    color: Color.White,
    fontSize: 16
  },
  pressed: {
    opacity: 0.75,
  }
});