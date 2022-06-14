import { useState } from 'react';
import { StyleSheet, View, Button, FlatList, Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  //event handler for button Press being called in the child component
  const addGoalText = (enteredGoalText) => {
    if (enteredGoalText === '') return;
    //create a new object and push it based on the previous state
    setCourseGoals((prev) => [
      ...prev,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setModalIsVisible(false);
  };

  const deleteItemHandler = (id) => {
    setCourseGoals((prev) => {
      return prev.filter((goals) => goals.id !== id);
    });
    console.log('DeleTE');
  };

  const showModalHandler = () => {
    setModalIsVisible(true);
  };

  const hideModalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          onPress={showModalHandler}
          color="#a065ec"
        />
        {modalIsVisible && (
          <Modal visible={modalIsVisible} animationType="fade">
            <View style={styles.inputContainer}>
              <GoalInput
                visible={modalIsVisible}
                onCancel={hideModalHandler}
                addGoalHandler={addGoalText}
              />
            </View>
          </Modal>
        )}
        <View style={styles.goalsContainer}>
          {/* <ScrollView>
            {courseGoals.map((goal, i) => (
              
            ))}
          </ScrollView>
          flatlist is used to render data we need atm */}
          <FlatList
            data={courseGoals}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteItemHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#511bcc',
  },
  goalsContainer: {
    flex: 5,
  },
});
