import { useReducer } from 'react';
import { Task } from '../types/task';

type taskState = {
    tasks: Task[];
}

type Action = 
    | { type: 'ADD_TASK'; payload: string }
    | { type: 'TOGGLE_TASK'; payload: string }
    | { type: 'DELETE_TASK'; payload: string }

const initialState: taskState = {
    tasks: []
}

const reducer = (state: taskState, action: Action): taskState => {
    switch (action.type) {
        case 'ADD_TASK':
            return { tasks: [
                ...state.tasks,
                { id: Date.now().toString(), name: action.payload, done: false }
            ]};
        case 'TOGGLE_TASK':
            return { tasks: state.tasks.map(task => 
                task.id === action.payload ? { ...task, done: !task.done } : task
            )};
        case 'DELETE_TASK':
            return { tasks: state.tasks.filter(task => task.id !== action.payload) };
        default:
            return state;
    }
};

export const useTodos = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addTask = (name: string) => 
        dispatch({ type: 'ADD_TASK', payload: name })

    const toggleTask = (id: string) =>
        dispatch({ type: 'TOGGLE_TASK', payload: id })

    const deleteTask = (id: string) =>
        dispatch({ type: 'DELETE_TASK', payload: id })

    return {
        state,
        addTask,
        toggleTask,
        deleteTask
    }
}