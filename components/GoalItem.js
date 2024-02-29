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
  item: {
    backgroundColor: "#00BFFF",
    padding: 8,
    color: "white",
    fontSize: 20,
    marginTop: 4,
    borderRadius: 10,
    textAlign: "center",
    fontWeight: "bold",
  },

  list: {
    flexDirection: "column",
    marginTop: 30,
    marginHorizontal: 20,
  },
});
