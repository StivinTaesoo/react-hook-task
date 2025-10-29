import { useState } from "react";

interface Task {
    id: number;
    title: string;
    description: string;
    priority: "Low" | "Medium" | "High";
    completed: boolean;
    createdAt: string;
}

interface TaskFormProps {
    onAddTask: (task: Task) => void;
}

interface FormErrors {
    title?: string;
}

function TaskForm({ onAddTask }: TaskFormProps) {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [priority, setPriority] = useState<"Low" | "Medium" | "High">(
        "Medium"
    );

    const [errors, setErrors] = useState<FormErrors>({});

    const handleSubmit = (): void => {
        setErrors({});

        if (!title.trim()) {
            setErrors({ title: "Task title cannot be empty!" });
            return;
        }

        const newTask: Task = {
            id: Date.now(),
            title: title.trim(),
            description: description.trim(),
            priority,
            completed: false,
            createdAt: new Date().toISOString(),
        };

        onAddTask(newTask);

        setTitle("");
        setDescription("");
        setPriority("Medium");
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };

    return (
        <div className="task-form-container">
            <h2 className="form-title">Add New Task</h2>

            <div className="form-fields">
                <div className="form-group">
                    <label htmlFor="title" className="form-label">
                        Task Title *
                    </label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Enter task title..."
                        className="form-input"
                    />
                    {errors.title && (
                        <p className="error-message">{errors.title}</p>
                    )}
                </div>
                {/* This description box is optional since it's not required in the assignment */}
                <div className="form-group">
                    <label htmlFor="description" className="form-label">
                        Description (Optional)
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter task description..."
                        rows={3}
                        className="form-textarea"
                    />
                </div>

                {/* The priority field is also an optional addintion */}
                <div className="form-group">
                    <label htmlFor="priority" className="form-label">
                        Priority
                    </label>
                    <select
                        id="priority"
                        value={priority}
                        onChange={(e) =>
                            setPriority(
                                e.target.value as "Low" | "Medium" | "High"
                            )
                        }
                        className="form-select"
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>

                <button onClick={handleSubmit} className="submit-button">
                    Add Task
                </button>
            </div>

            {/* Demo section to show it works */}
            <div className="preview-section">
                <h3 className="preview-title">Current Form Values:</h3>
                <pre className="preview-content">
                    {JSON.stringify({ title, description, priority }, null, 2)}
                </pre>
            </div>
        </div>
    );
}
