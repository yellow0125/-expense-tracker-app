import { View, StyleSheet } from 'react-native'
import React from 'react'
import Color from '../constants/Color'
import ExpensesOutput from '../components/Output/ExpensesOutput';
import { useState, useEffect } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/firebase-setup';
import Hint from '../components/UI/Hint';

export default function ImportantScreen() {

  const [expensesImp, setExpensesImp] = useState([])
  useEffect(() => {
    const q = query(collection(firestore, "expenses"), where('isImportant', '==', true));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      if (querySnapshot.empty) {
        setExpensesImp([]);
        return;
      }
      setExpensesImp(
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

  if (expensesImp.length == 0) {
    return (
      <View style={styles.empty}>
        <Hint>You don't have any expenses marked as IMP.</Hint>
      </View>
    )
  }

  return (
    <View style={styles.screen}>
      <ExpensesOutput expenses={expensesImp} />
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

})