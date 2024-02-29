import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
import CustomButton from "./CustomButton";

export default function GoalInput({
  handleInputText,
  handleClickGoal,
  handleVisiblity,
  modalVisible,
}) {
  return (
    <View style={styles.main}>
      <Modal visible={modalVisible} style={styles.main}>
        <View style={styles.container}>
          <TextInput
            placeholder="write something"
            style={styles.input}
            onChangeText={handleInputText}
          />
          <View style={styles.buttons}>
            <CustomButton
              title={"Cancel Modal"}
              onClick={handleVisiblity}
              color="#FF0800"
            />
            <CustomButton
              title={"My Goal"}
              onClick={handleClickGoal}
              color="#33006F"
            />
          </View>
        </View>
      </Modal>
      <Button title="Add New Goal" onPress={handleVisiblity} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E6E6FA",
    flex: 1,
  },

  main: {
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    height: 40,
    width: "70%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    marginTop: 10,
    fontSize: 18,
    backgroundColor: "white",
  },

  buttons: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 4,
    paddingRight: 20,
    marginLeft: 10,
  },
});
