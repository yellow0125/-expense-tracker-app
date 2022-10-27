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

export default function AddScreen({ navigation }) {
  const [inputs, setInputs] = useState({
    amount: {
      value: '',
      isValid: true,
    },
    description: {
      value: '',
      isValid: true,
    }
  });
  const formIsValid = (inputs.amount.isValid && inputs.description.isValid)

  const onDataAdd = async function (newInputs) {
    await writeToDB(newInputs)
      navigation.goBack()
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
    }
    const amountIsValid = (!isNaN(expenseData.amount) && expenseData.amount > 0);
    const descriptionIsValid = expenseData.description.trim().length > 0;
    if (amountIsValid && descriptionIsValid) {
      onDataAdd(expenseData)
    } else {
      setInputs((temp) => {
        return {
          amount: { value: temp.amount.value, isValid: amountIsValid },
          description: { value: temp.description.value, isValid: descriptionIsValid },
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
        <Text style={styles.title}>Your Expense</Text>
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
            style={[styles.input, { minHeight: 100, textAlignVertical: 'top', }]}
            blurOnSubmit
            autoCaptalize="none"
            keyboardType="default"
            // multiline='true'
            onChangeText={(newinput) => { inputChangeHandler('description', newinput) }}
            value={inputs.description.value}
          />
        </View>
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
        {(!formIsValid) && <Text style={styles.invalidInput}>Invalid inputs - Please check the entered DATA!</Text>}
      </View>
    </TouchableWithoutFeedback>
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
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    marginTop: 100,
  },
  label: {
    fontSize: 16,
    color: '#c6affc',
    marginBottom: 4,
    marginTop: 30,

  },
  input: {
    borderWidth: 0,
    borderColor: 'black',
    borderRadius: 4,
    backgroundColor: '#c6affc',
    padding: 6,
    fontSize: 18,
    color: '#2d0689',
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
    color: '#FEBE16',
    marginTop: 15,
    fontSize: 17,
    alignSelf: 'center',
  }
})