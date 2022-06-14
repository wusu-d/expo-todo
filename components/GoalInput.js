import { StyleSheet, TextInput, Button, View, Image } from 'react-native';
import { useState } from 'react';

export default GoalInput = ({ addGoalHandler, onCancel }) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  //event handler for text input
  const goalInputHandler = (text) => {
    setEnteredGoalText(text);
  };

  const addGoalTextHandler = () => {
    addGoalHandler(enteredGoalText);
    setEnteredGoalText('');
  };
  return (
    <>
      <Image
        style={styles.image}
        source={require('../assets/images/goal.png')}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="Add Goal"
            onPress={addGoalTextHandler}
            color="#b180f0"
          />
        </View>
        <View style={styles.button}>
          <Button title="Cancel" onPress={onCancel} color="#f32128" />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    padding: 16,
    width: '100%',
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    borderWidth: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 16,
  },
  button: {
    width: 100,
  },
});
