import { StyleSheet, Text, View, Pressable } from "react-native";

export default function GoalItem({ handleDeleteItem, goal }) {
  return (
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
  );
}

const styles = StyleSheet.create({
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
