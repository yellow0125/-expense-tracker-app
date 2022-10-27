import { StyleSheet } from 'react-native'
import React from 'react'
import Column from '../UI/Column'
import ExpensesList from './ExpensesList'

export default function ExpensesOutput({ expenses }) {

  return (
    <Column style={styles.column}>
      <ExpensesList expenses={expenses} />
    </Column>
  )
}
const styles = StyleSheet.create({
  column: {
    flex: 1,
  },
})