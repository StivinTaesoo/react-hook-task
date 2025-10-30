import type { Task } from "../types";
import { TaskItem } from "./TaskItem";

interface TaskListProps {
    tasks: Task[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
    const activeTasks = tasks.filter((task) => !task.completed);
    const completedTasks = tasks.filter((task) => task.completed);

    return (
        <div className="task-list">
            <h2>My Tasks</h2>

            {tasks.length === 0 ? (
                <p className="empty-state">
                    No tasks yet. Add one to get started!
                </p>
            ) : (
                <>
                    {activeTasks.length > 0 && (
                        <div className="task-section">
                            <h3 className="section-title">
                                Active Tasks ({activeTasks.length})
                            </h3>
                            {activeTasks.map((task) => (
                                <TaskItem
                                    key={task.id}
                                    task={task}
                                    onToggle={onToggle}
                                    onDelete={onDelete}
                                />
                            ))}
                        </div>
                    )}

                    {completedTasks.length > 0 && (
                        <div className="task-section">
                            <h3 className="section-title">
                                Completed Tasks ({completedTasks.length})
                            </h3>
                            {completedTasks.map((task) => (
                                <TaskItem
                                    key={task.id}
                                    task={task}
                                    onToggle={onToggle}
                                    onDelete={onDelete}
                                />
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
