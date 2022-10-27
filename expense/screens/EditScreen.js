import {
  View,
  StyleSheet,
  Alert,
} from 'react-native'
import React, { useState } from 'react'
import Color from '../constants/Color'
import MainButton from '../components/UI/MainButton'
import Title from '../components/UI/Title'
import { deleteFromDB } from '../firebase/firestore';

export default function EditScreen({ navigation, route }) {
  const { expenseId, isImportant, description } = route.params
  async function onDelete() {
    await deleteFromDB(expenseId)
    navigation.goBack()
  }
  function setStatus() {
    navigation.navigate('ImportantScreen')
  }

  let content = 'Mark as Important'
  if (isImportant) {
    content = 'Mark as Unimportant'
  }

  return (
    <View style={styles.screen}>
      <Title>{description}</Title>
      <View style={styles.buttons}>
        <MainButton
          style={styles.button}
          onPress={onDelete}>Delete</MainButton>
        <MainButton
          style={styles.button}
          onPress={setStatus}
        >{content}</MainButton>
      </View>
    </View>
  )
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  button: {
    marginHorizontal: 15,
    minWidth: 100,
  },
})