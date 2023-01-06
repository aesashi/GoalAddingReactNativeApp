import { useState } from 'react';
import { Button,
         StyleSheet,
         TextInput,
         View,
         Modal,
        Image,
       } from 'react-native';

export default function Input(props) {
  const [goalInput, setGoalInput] = useState('');

  function goalInputHandler(enteredText){
    setGoalInput(enteredText);
    console.log(goalInput);
  }
  function addGoals(){
    props.onAddGoals(goalInput, setGoalInput);
  }
  return (
    <Modal visible={props.isVisible}>
    <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          placeholder='小さな目標を入れてください'
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={goalInput}
          placeholderTextColor={"white"}
        />
        <View style={styles.buttonContainer}>
          <View>
            <Button title="ゴールを追加" onPress={addGoals} color={"white"}/>
          </View>
          <View>
            <Button title="キャンセル" color={"white"} onPress={props.onTurnOff} />
          </View>
        </View>
      </View>
    </Modal>
  )
}


const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2baeeb',

  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    height: 70,
    paddingLeft: 50,
    marginBottom:20,
    color: "white",
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  image: {
    backgroundColor: '#2baeeb',
    height: 100,
    width: 100,
    margin: 20,
  }
});
