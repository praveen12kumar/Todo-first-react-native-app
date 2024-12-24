import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { theme } from "../theme";

type TodoItemProps ={
    todoValue: string,
    isCompleted?: boolean,
    markComplete: () => void
}


export function TodoItem({todoValue, isCompleted, markComplete}:TodoItemProps) {
  function handlePress() {
    Alert.alert("Delete Todo", 
                `Are you sure you want to delete this todo ${isCompleted ? "pending" : "completed"}`, 
    [
      {
        text: "Yes",
        onPress: () => {
          markComplete();
        },
        style: "destructive",
      },
      {
        text: "No",
        onPress: () => {
          console.log("No Pressed");
        },
      },
    ]);
  }

  return (
    <View style={styles.todoContainer}>
      <Text style={[
        styles.todoText,
        isCompleted ? styles.textCompleted: undefined
        ]}>{todoValue}</Text>
      <TouchableOpacity 
        onPress={handlePress} 
        style={[
            styles.button,
            isCompleted ? styles.buttonCompleted : undefined
            ]}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  todoContainer: {
    paddingVertical: 20,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: theme.lightBlue,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  todoText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    borderRadius: 5,
    backgroundColor: theme.lightRed,
    padding: 6,
  },
  buttonText: {
    color: theme.colorWhite,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  buttonCompleted:{
    backgroundColor: theme.gray,
  },
  textCompleted: {
    textDecorationLine: "line-through",
    color: theme.gray
  },
  
});
