import { StatusBar } from 'expo-status-bar';
import { Button,
         StyleSheet,
         View,
         FlatList,
         SafeAreaView,
        } from 'react-native';
import { useState } from 'react';
import Input from './components/Input';
import ListItems from './components/ListItems';

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [modalState, setModalState] = useState(false);


  function addGoals(goalInput, setGoalInput) {
    if (!goalInput.trim()) {
      setGoalInput('');
      return;
    }
    setGoalList(currentGoalList => [
      ...currentGoalList,
      { text: goalInput, id: Math.random().toString() },
    ])
    setGoalInput('');
    turnOff()
  }

  function deleteItem(id) {
    setGoalList(currentGoalList => {
      return currentGoalList.filter((goal) => goal.id !== id)
    })
  }

  function turnOn() {
    setModalState(true);
  }
  function turnOff() {
    setModalState(false);
  }

  return (
    <>
    <StatusBar style="light" />
    <SafeAreaView style={{flex: 1}}>
    <View style={styles.appContainer}>
      <Button title="ゴールを追加" onPress={turnOn} color={"white"}/>
      <Input isVisible={modalState} onAddGoals={addGoals} onTurnOff={turnOff} />
        <View style={styles.goalContainer}>

            <FlatList
              data={goalList}
              renderItem={(itemData) => {
                return(
                  <ListItems onDeleteItem={deleteItem} text={itemData.item.text} id={itemData.item.id} />
                );
              }}
              keyExtractor={(item, index) => {
                return index;
              }}
            />
        </View>
    </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingRight: 16,
    paddingLeft: 16,

  },
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
  goalContainer: {
    flex: 5,
    margin: 24,
    borderRadius: 6,

  },



});
