// App.js
import React, { useState } from "react";
import { View } from "react-native";
import TodoList from "./TodoList";
import { View, TextInput, Button } from "react-native";
import { View, FlatList } from "react-native";
import { Text, TouchableOpacity } from "react-native";

const AddTodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={(value) => setText(value)}
        placeholder="Enter a task..."
      />
      <Button title="Add Task" onPress={handleAdd} />
    </View>
  );
};

// TodoList.js

const TodoList = ({ todos, onDelete }) => {
  return (
    <View>
      <FlatList
        data={todos}
        renderItem={({ item }) => <TodoItem item={item} onPress={onDelete} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

// TodoItem.js

const TodoItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(item.id)}>
      <Text>{item.text}</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <View>
      <AddTodoForm onAdd={handleAddTodo} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </View>
  );
};

export default App;
