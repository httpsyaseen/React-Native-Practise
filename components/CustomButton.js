import { Pressable, StyleSheet, Text } from "react-native";

export default function CustomButton({ title, onClick, color = "#00BFFF" }) {
  return (
    <Pressable onPress={onClick} tyle style={styles.b}>
      <Text style={[styles.button, { color }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 20,
    padding: 7,
  },

  b: {
    backgroundColor: "transparent",
  },
});
