import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";

export default function App() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(null)

  const handleSaveTask = () => {
    if (!taskText.trim()) return;
    if (isEditing){
      setTasks(
        tasks.map((task) => (task.id === isEditing ? {...task, text: taskText}: task))
      )
      setIsEditing(null);
    } else {
      const newTask = { id: Date.now().toString(), text: taskText };
      setTasks([...tasks, newTask]);
    }
    setTaskText("")
  };

  const handleEdit = (item) => {
    setTaskText(item.text);
    setIsEditing(item.id);
  }

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  
  const renderTask = ({ item }) => (
    <View style={styles.task}>
      <Text style={styles.taskText}>{item.text}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.editButton}>
          <Icon name="edit" color="#4caf50" onPress={() => handleEdit(item)}>
            編集
          </Icon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item.id)}>
          <Icon name="delete" color="#f44336">
            削除
          </Icon>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODOアプリ</Text>
      <TextInput
        placeholder="タスクを入力"
        style={styles.input}
        onChangeText={setTaskText}
        value={taskText}
      />
      <TouchableOpacity style={styles.saveBotton} onPress={handleSaveTask}>
        <Text style={styles.saveBottonText}>{isEditing ? "編集" : "追加"}</Text>
      </TouchableOpacity>
      <FlatList data={tasks} renderItem={renderTask} />
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
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#eeee",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  taskText: {
    maxWidth: "80%",
  },
});
