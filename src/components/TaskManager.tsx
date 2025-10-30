import { useTasks } from "../hooks/useTasks";
import { useTheme } from "../hooks/useTheme";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";
import { ThemeToggle } from "./ThemeButton";

export function TaskManager() {
    const { tasks, addTask, toggleTask, deleteTask } = useTasks();
    const { theme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <header className="app-header">
                <h1>📝 Task Manager</h1>
                <ThemeToggle />
            </header>

            <div className="app-container">
                <TaskForm onAddTask={addTask} />
                <TaskList
                    tasks={tasks}
                    onToggle={toggleTask}
                    onDelete={deleteTask}
                />
            </div>
        </div>
    );
}
