import { StyleSheet, View, Text, Pressable } from 'react-native';

export default GoalItem = ({ text, onDeleteItem, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={onDeleteItem.bind(this, id)}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#5e0acc',
    backgroundColor: '#5e0acc',
    color: '#fff',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 10,
    color: '#fff',
  },
});
