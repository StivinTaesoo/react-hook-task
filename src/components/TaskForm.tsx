import { useState } from "react";

interface TaskFormProps {
    onAddTask: (
        title: string,
        description: string,
        priority: "Low" | "Medium" | "High"
    ) => void;
}

export function TaskForm({ onAddTask }: TaskFormProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState<"Low" | "Medium" | "High">(
        "Medium"
    );
    const [errors, setErrors] = useState<{ title?: string }>({});

    const handleSubmit = () => {
        if (!title.trim()) {
            setErrors({ title: "Task title is required" });
            return;
        }

        onAddTask(title, description, priority);

        setTitle("");
        setDescription("");
        setPriority("Medium");
        setErrors({});
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    return (
        <div className="task-form">
            <h2>Add New Task</h2>

            <div className="form-group">
                <label htmlFor="title">Task Title *</label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                        if (errors.title) setErrors({});
                    }}
                    onKeyPress={handleKeyPress}
                    placeholder="e.g., Walk the dog"
                    className={errors.title ? "error" : ""}
                />
                {errors.title && (
                    <span className="error-message">{errors.title}</span>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="description">Description (optional)</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Add any additional details..."
                    rows={3}
                />
            </div>

            <div className="form-group">
                <label htmlFor="priority">Priority (optional)</label>
                <select
                    id="priority"
                    value={priority}
                    onChange={(e) =>
                        setPriority(e.target.value as "Low" | "Medium" | "High")
                    }
                >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>

            <button onClick={handleSubmit} className="btn-primary">
                Add Task
            </button>
        </div>
    );
}
