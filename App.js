import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [goal, setGoal] = useState([]);
  const [enteredText, setEnteredText] = useState("");

  function handleInputText(text) {
    setEnteredText(text);
  }

  function handleClickGoal() {
    setGoal((goals) => [...goals, enteredText]);
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
        {goal.length > 0 ? (
          goal.map((mygoal, index) => {
            return <Text key={index}>{mygoal}</Text>;
          })
        ) : (
          <Text>Your Goals Here</Text>
        )}
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
});
