import { useState } from "react";
import { StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goal, setGoal] = useState([]);
  const [enteredText, setEnteredText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function handleVisiblity() {
    setModalVisible((modalVisible) => !modalVisible);
  }

  function handleInputText(text) {
    setEnteredText(text);
  }

  function handleClickGoal() {
    handleVisiblity();
    setGoal((goals) => [
      ...goals,
      { text: enteredText, id: Math.random().toString() },
    ]);
  }

  function handleDeleteItem(id) {
    setGoal((goal) => goal.filter((goal) => goal.id !== id));
  }

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        <GoalInput
          handleClickGoal={handleClickGoal}
          handleInputText={handleInputText}
          modalVisible={modalVisible}
          handleVisiblity={handleVisiblity}
        />

        <GoalItem handleDeleteItem={handleDeleteItem} goal={goal} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "#E6E6FA",
    // alignItems: "center",
    paddingTop: 30,
    flex: 1,
  },
});
