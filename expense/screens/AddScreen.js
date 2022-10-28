import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native'
import React, { useState } from 'react'
import Color from '../constants/Color'
import MainButton from '../components/UI/MainButton'
import { writeToDB } from '../firebase/firestore';
import Title from '../components/UI/Title';

export default function AddScreen({ navigation }) {
  const [inputs, setInputs] = useState({
    amount: {
      value: '',
      isValid: true,
    },
    description: {
      value: '',
      isValid: true,
    },
    isImportant: {
      value: false,
      isValid: true,
    },
  });
  const formIsValid = (inputs.amount.isValid && inputs.description.isValid)

  const onDataAdd = async function (newInputs) {
    await writeToDB(newInputs)
    navigation.navigate('AllScreen')
  }

  function inputChangeHandler(identifier, input) {
    setInputs((currentValue) => {
      return {
        ...currentValue,
        [identifier]: { value: input, isValid: true },
      }
    });
  }

  function cancelForm() {
    navigation.goBack()
  }
  
  function submitForm() {
    const expenseData = {
      amount: parseFloat(inputs.amount.value),
      description: inputs.description.value,
      isImportant: false,
    }
    const amountIsValid = (!isNaN(expenseData.amount) && expenseData.amount > 0);
    const descriptionIsValid = (expenseData.description.trim().length > 0 && isNaN(expenseData.description));
    if (amountIsValid && descriptionIsValid) {
      onDataAdd(expenseData)
      Keyboard.dismiss()
    } else {
      setInputs((temp) => {
        return {
          amount: { value: temp.amount.value, isValid: amountIsValid },
          description: { value: temp.description.value, isValid: descriptionIsValid },
          isImportant: { value: false, isValid: descriptionIsValid },
        }
      })
      return;
    }
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <Title num={30}>Your Expense</Title>
        <View>
          <Text style={styles.label}>Amount</Text>
          <TextInput
            style={styles.input}
            blurOnSubmit
            autoCaptalize="none"
            keyboardType="decimal-pad"
            onChangeText={(newinput) => { inputChangeHandler('amount', newinput); }}
            value={inputs.amount.value}
          />
        </View>
        <View>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, { minHeight: 100, textAlignVertical: 'top'}]}
            blurOnSubmit
            autoCaptalize="none"
            keyboardType="default"
            multiline='true'
            onChangeText={(newinput) => { inputChangeHandler('description', newinput) }}
            value={inputs.description.value}
          />
        </View>
        {(!formIsValid) && <Text style={styles.invalidInput}>Invalid inputs - Please check the entered DATA!</Text>}
        <View style={styles.buttons}>
          <MainButton
            style={styles.button}
            mode='negative'
            onPress={cancelForm}>Cancel</MainButton>
          <MainButton
            style={styles.button}
            onPress={submitForm}
            disabled={inputs.length ? false : true}
          >Confirm</MainButton>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
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
  label: {
    fontSize: 16,
    color: Color.White,
    marginBottom: 4,
    marginTop: 20,
  },
  input: {
    borderRadius: 4,
    backgroundColor: Color.White,
    padding: 6,
    fontSize: 18,
    color: Color.Black,
    margin: 5,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    marginHorizontal: 15,
    minWidth: 100,
  },
  invalidInput: {
    color: Color.Red,
    marginTop: 25,
    fontSize: 18,
    alignSelf: 'center',
  }
})