import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
} from "react-native";

import { v4 as uuidv4 } from "react-native-get-random-values";

export default function App() {
  const [goal, setGoal] = useState([]);
  const [enteredText, setEnteredText] = useState("");

  function handleInputText(text) {
    setEnteredText(text);
  }

  function handleClickGoal() {
    setGoal((goals) => [
      ...goals,
      { text: enteredText, id: Math.random().toString() },
    ]);
  }

  function handleDeleteItem(id) {
    setGoal((goal) => goal.filter((goal) => goal.id !== id));
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.container}>
        <TextInput
          placeholder="write something"
          style={styles.input}
          onChangeText={handleInputText}
        />
        <Button title="My Goal" onPress={handleClickGoal} />
      </View>
      <View style={styles.list}>
        {goal.map((mygoal, index) => {
          return (
            <Pressable onPress={() => handleDeleteItem(mygoal.id)} key={index}>
              <Text style={styles.item} key={index}>
                {mygoal.text}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 70,
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    paddingBottom: 50,
  },

  input: {
    height: 40,
    width: "70%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },

  list: {
    paddingTop: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  item: {
    backgroundColor: "purple",
    padding: 4,
    color: "white",
    fontSize: 20,
    marginTop: 4,
    borderRadius: 10,
    width: "70%",
    textAlign: "center",
  },
});
