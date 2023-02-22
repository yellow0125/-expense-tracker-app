import { View, StyleSheet } from 'react-native'
import React from 'react'
import Color from '../constants/Color'
import ExpensesOutput from '../components/Output/ExpensesOutput'
import { useState, useEffect } from 'react'
import { collection, onSnapshot, query } from 'firebase/firestore'
import { firestore } from '../firebase/firebase-setup'
import Hint from '../components/UI/Hint'
import Loading from '../components/UI/Loading'


export default function AllExpensesScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [expenses, setExpenses] = useState([])
  useEffect(() => {
    setIsLoading(true)
    const q = query(collection(firestore, "expenses"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      if (querySnapshot.empty) {
        setExpenses([]);
        setIsLoading(false)
        return;
      }
      setExpenses(
        querySnapshot.docs.map((snapDoc) => {
          let data = snapDoc.data();
          data = { ...data, key: snapDoc.id };
          setIsLoading(false);
          return data;
        })
      )
    })
    return () => {
      unsubscribe();
      setIsLoading(false);
    };
  }, [])

  if (isLoading) {
		return <Loading/>
	}

  if (expenses.length == 0) {
    return (
      <View style={styles.empty}>
        <Hint>You don't have any expenses. Add one!</Hint>
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
    backgroundColor: Color.BgLightGreen,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.BgLightGreen,
  },
  text: {
    color: Color.White,
    fontSize: 38,
  },
});