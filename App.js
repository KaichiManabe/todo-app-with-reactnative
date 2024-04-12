import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODOアプリ</Text>
      <TextInput
        placeholder="タスクを入力"
        style={styles.input}
        onChangeText={setTaskText}
        value={taskText}
      ></TextInput>
      <TouchableOpacity style={styles.saveBotton}>
        <Text style={styles.saveBottonText}>追加</Text>
      </TouchableOpacity>

      <FlatList data={[]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderColor: "#ccceee",
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
    borderWidth: 2,
  },
  saveBotton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  saveBottonText: {
    color: "#fff",
    textAlign: "center",
  },
});
