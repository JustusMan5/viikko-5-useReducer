import React from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Task } from '../types/task';
import TaskItem from './TaskItem';

interface TaskListProps {
    tasks: Task[];
    onToggleTask: (id: string) => void;
    onDeleteTask: (id: string) => void;
}

export default function TaskList({ tasks, onToggleTask, onDeleteTask }: TaskListProps) {
    return (
            <SwipeListView
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TaskItem task={item} 
                        onToggle={() => onToggleTask(item.id)} 
                        onDeleteTask={() => onDeleteTask(item.id)} />
                )}
            />
    );
}
                    