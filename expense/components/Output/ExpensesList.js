import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import ExpensesItem from './ExpensesItem';

export default function ExpensesList({expenses}) {

  

  return (
    <View style={styles.container}>
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => {

        return (
          <ExpensesItem expense={item}/>
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