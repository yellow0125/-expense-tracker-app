import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Color from '../constants/Color'
import ExpensesOutput from '../components/Output/ExpensesOutput'
import { useState, useEffect } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { firestore } from '../firebase/firebase-setup';
export default function AllExpensesScreen() {

  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    const q = query(collection(firestore, "expenses"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      if (querySnapshot.empty) {
        setExpenses([]);
        return;
      }
      setExpenses(
        querySnapshot.docs.map((snapDoc) => {
          let data = snapDoc.data();
          data = { ...data, key: snapDoc.id };
          return data;
        })
      )
    })
    return () => {
      unsubscribe();
    };
  }, [])

  if (expenses.length == 0) {
    return (
      <View style={styles.empty}>
        <Text style={styles.text}>You don't have any expenses. Add one!</Text>
      </View>
    )
  }

  return (
    <View style={styles.screen}>
      <ExpensesOutput expenses={expenses} />
    </View>
  );

}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: Color.Bgc,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.Bgc,

  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },

});