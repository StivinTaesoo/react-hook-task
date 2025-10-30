import type { Task } from "../types";

interface TaskItemProps {
    task: Task;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
    return (
        <div className={`task-item ${task.completed ? "completed" : ""}`}>
            <div className="task-content">
                <div className="task-header">
                    <h3>{task.title}</h3>
                    <span
                        className={`priority-badge priority-${task.priority.toLowerCase()}`}
                    >
                        {task.priority}
                    </span>
                </div>
                {task.description && (
                    <p className="task-description">{task.description}</p>
                )}
            </div>

            <div className="task-actions">
                <button
                    onClick={() => onToggle(task.id)}
                    className={`btn-icon ${
                        task.completed ? "btn-undo" : "btn-complete"
                    }`}
                    title={task.completed ? "Mark as not done" : "Mark as done"}
                >
                    {task.completed ? "↩" : "✓"}
                </button>
                <button
                    onClick={() => onDelete(task.id)}
                    className="btn-icon btn-delete"
                    title="Delete task"
                >
                    🗑
                </button>
            </div>
        </div>
    );
}
