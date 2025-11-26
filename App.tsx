import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { Task } from './types/task';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'TASKS_STORAGE_KEY';

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    (async () => {
      const storedTasks = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    })();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      name,
      done: false,
    };
    setTasks([...tasks, newTask]);
  }
  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, done: !task.done } : task
    ));
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <AddTask onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleTask={toggleTask} onDeleteTask={deleteTask} />
      <StatusBar style="auto" />
    </View>
  );
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
