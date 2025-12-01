import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { useTodos } from './hooks/useTodos';

export default function App() {
  const { state, addTask, toggleTask, deleteTask } = useTodos();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <AddTask onAddTask={addTask} />
      <TaskList
        tasks={state.tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
