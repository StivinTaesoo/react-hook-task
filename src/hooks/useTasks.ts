import { useState, useEffect } from "react";
import type { Task } from "../types";

const STORAGE_KEY = "task-manager-tasks";

const loadTasksFromStorage = (): Task[] => {
    try {
        const savedTasks = localStorage.getItem(STORAGE_KEY);
        if (savedTasks) {
            const parsedTasks = JSON.parse(savedTasks);
            console.log("Tasks loaded from localStorage:", parsedTasks.length);
            return parsedTasks;
        }
    } catch (error) {
        console.error("Failed to load tasks from localStorage:", error);
    }
    return [];
};

export function useTasks() {
    const [tasks, setTasks] = useState<Task[]>(loadTasksFromStorage);

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
            console.log("Tasks saved to localStorage:", tasks.length);
        } catch (error) {
            console.error("Failed to save tasks to localStorage:", error);
        }
    }, [tasks]);

    const addTask = (
        title: string,
        description: string,
        priority: "Low" | "Medium" | "High"
    ) => {
        const newTask: Task = {
            id: Date.now().toString(),
            title,
            description,
            priority,
            completed: false,
            createdAt: Date.now(),
        };
        setTasks([...tasks, newTask]);
    };

    const toggleTask = (id: string) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (id: string) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return { tasks, addTask, toggleTask, deleteTask };
}
