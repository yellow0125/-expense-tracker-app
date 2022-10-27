import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import ExpensesItem from './ExpensesItem';

export default function ExpensesList({expenses}) {

  

  return (
    <View style={styles.container}>
    <FlatList
      data={expenses}
      keyExtractor={(item, index) => item.id}
      renderItem={(expenseData) => {

        const expense = expenseData.item;

        return (
          <ExpensesItem expense={expense}/>
        );
      }}
    />
  </View>
  )
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 4,
		flex: 1,
	},
	expensetext: {
		color: 'black',
	}
})