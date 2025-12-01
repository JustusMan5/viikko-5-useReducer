import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native';

interface AddTaskProps {
    onAddTask: (name: string) => void;
}

export default function AddTask({ onAddTask }: AddTaskProps) {
    const [taskName, setTaskName] = useState('');

    const handleAddTask = () => {
        onAddTask(taskName);
        setTaskName('');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Add a new task"
                value={taskName}
                onChangeText={setTaskName}
            />
            <Button title="Add" onPress={handleAddTask} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    input: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 8,
        marginRight: 8,
        borderRadius: 4,
    },
});