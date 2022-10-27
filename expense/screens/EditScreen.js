import {
  View,
  StyleSheet,
  Alert,
} from 'react-native'
import React, { useState } from 'react'
import Color from '../constants/Color'
import MainButton from '../components/UI/MainButton'
import Title from '../components/UI/Title'
import { deleteFromDB, updateFromDB } from '../firebase/firestore';


export default function EditScreen({ navigation, route }) {
  const { expenseId, isImportant, description } = route.params

  const confirmDeleteHandler = () => {
    Alert.alert("DELETE", "Are you sure you want to delete this?", [
      { text: "No", style: "cancel", onPress: () => { } },
      { text: "Yes", style: "destructive", onPress: onDelete }
    ]);
    return;
  }

  const confirmImpHandler = () => {
    if (!isImportant) {
      Alert.alert('Important', 'Are you sure you want to mark this as important?', [
        { text: "No", style: "cancel", onPress: () => { } },
        { text: "Yes", onPress: setImp }
      ]);
      return;
    } else {
      Alert.alert('Unimportant', 'Are you sure you want to mark this as unimportant?', [
        { text: "No", style: "cancel", onPress: () => { } },
        { text: "Yes", onPress: setImp }
      ]);
      return;
    }
  }

  async function onDelete() {
    await deleteFromDB(expenseId)
    navigation.goBack()
  }
  async function setImp() {
    await updateFromDB(expenseId, !isImportant)
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
          onPress={confirmDeleteHandler}>Delete</MainButton>
        <MainButton
          style={styles.button}
          onPress={confirmImpHandler}
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