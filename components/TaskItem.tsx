import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Task } from "../types/task";

type TaskItemProps = {
    task: Task;
    onToggle: () => void;
    onDeleteTask: () => void;
};

export default function TaskItem({ task, onToggle, onDeleteTask }: TaskItemProps) {
    return (
        <TouchableOpacity onPress={onToggle} style={styles.container}>
            <Text style={[styles.text, task.done && styles.done]}>
                {task.name}
            </Text>
            <Text style={styles.deleteButton} onPress={onDeleteTask}>X</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    text: {
        fontSize: 18,
    },
    done: {
        textDecorationLine: "line-through",
        color: "#000000ff",
    },
    deleteButton: {
        color: "red",
        position: "absolute",
        right: 10,
        top: 10,
    },
});