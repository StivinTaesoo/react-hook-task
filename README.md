# 📝 Task Manager

A modern, feature-rich task management application built with React, TypeScript, and vanilla CSS. This project demonstrates the use of React Hooks including `useState`, `useEffect`, and `useContext` for state management and side effects.

![Task Manager](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

-   ✅ **Add Tasks** - Create tasks with title, description, and priority levels
-   🎯 **Task Management** - Mark tasks as complete or incomplete
-   🗑️ **Delete Tasks** - Remove tasks you no longer need
-   💾 **Data Persistence** - Tasks are saved to localStorage and persist across page reloads
-   🌓 **Theme Switching** - Toggle between light and dark modes
-   📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
-   🎨 **Priority Levels** - Organize tasks by Low, Medium, or High priority
-   📊 **Task Sections** - Separate views for active and completed tasks

## 🚀 Demo

Add your demo link or screenshot here

## 📋 Table of Contents

-   [Features](#-features)
-   [Technologies Used](#-technologies-used)
-   [Project Structure](#-project-structure)
-   [Getting Started](#-getting-started)
-   [Usage](#-usage)
-   [React Concepts Demonstrated](#-react-concepts-demonstrated)
-   [Contributing](#-contributing)
-   [License](#-license)

## 🛠️ Technologies Used

-   **React 18.2.0** - UI library for building component-based interfaces
-   **TypeScript 5.0.0** - Type-safe JavaScript
-   **Vite 4.3.0** - Fast build tool and development server
-   **Vanilla CSS** - Custom styling without CSS frameworks
-   **localStorage API** - Browser storage for data persistence

## 📁 Project Structure

```
task-manager/
├── src/
│   ├── types/
│   │   └── Task.ts                    # TypeScript interfaces
│   │
│   ├── context/
│   │   └── ThemeContext.tsx           # Theme context provider
│   │
│   ├── hooks/
│   │   ├── useTheme.ts                # Custom hook for theme management
│   │   └── useTasks.ts                # Custom hook for task CRUD operations
│   │
│   ├── components/
│   │   ├── TaskForm.tsx               # Form component for adding tasks
│   │   ├── TaskItem.tsx               # Individual task display component
│   │   ├── TaskList.tsx               # Task list container component
│   │   ├── TaskManager.tsx            # Main application component
│   │   └── ThemeToggle.tsx            # Theme switcher button
│   │
│   ├── App.tsx                        # Root component with providers
│   ├── App.css                        # Global styles
│   └── main.tsx                       # Application entry point
│
├── index.html                         # HTML template
├── package.json                       # Dependencies and scripts
├── tsconfig.json                      # TypeScript configuration
├── vite.config.ts                     # Vite configuration
└── README.md                          # Project documentation
```

## 🏁 Getting Started

### Prerequisites

Make sure you have the following installed:

-   **Node.js** (version 16.0 or higher)
-   **npm** (version 7.0 or higher) or **yarn**

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/task-manager.git
cd task-manager
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Start the development server**

```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**

Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Building for Production

```bash
npm run build
# or
yarn build
```

The production-ready files will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 💡 Usage

### Adding a Task

1. Fill in the **Task Title** (required)
2. Optionally add a **Description**
3. Select a **Priority** level (Low, Medium, or High)
4. Click the **Add Task** button or press **Enter**

### Managing Tasks

-   **Mark as Complete**: Click the ✓ button to mark a task as done
-   **Mark as Incomplete**: Click the ↩ button to mark a completed task as not done
-   **Delete Task**: Click the 🗑 button to remove a task permanently

### Switching Themes

Click the 🌙/☀️ button in the top-right corner to toggle between light and dark modes.

## 🎓 React Concepts Demonstrated

### 1. State Management with `useState`

Used throughout the application for managing:

-   Task form inputs (title, description, priority)
-   Form validation errors
-   Task list data
-   Theme preference

**Example:**

```typescript
const [title, setTitle] = useState("");
const [tasks, setTasks] = useState<Task[]>([]);
```

### 2. Side Effects with `useEffect`

Implemented for:

-   Loading tasks from localStorage on component mount
-   Saving tasks to localStorage whenever they change
-   Synchronizing state with browser storage

**Example:**

```typescript
useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}, [tasks]);
```

### 3. Context API with `useContext`

Used for:

-   Global theme management
-   Sharing theme state across components without prop drilling
-   Providing theme toggle functionality

**Example:**

```typescript
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    // ...
}
```

### 4. Custom Hooks

Created reusable hooks:

-   `useTasks()` - Encapsulates all task-related logic and localStorage operations
-   `useTheme()` - Provides access to theme context with proper error handling

**Example:**

```typescript
export function useTasks() {
    const [tasks, setTasks] = useState<Task[]>(loadTasksFromStorage);
    // ... task operations
    return { tasks, addTask, toggleTask, deleteTask };
}
```

## 📦 Key Components

### TaskForm Component

Handles user input for creating new tasks with validation.

### TaskItem Component

Displays individual task information with action buttons.

### TaskList Component

Organizes and renders tasks in Active and Completed sections.

### ThemeToggle Component

Provides UI for switching between light and dark themes.

### TaskManager Component

Main component that coordinates all child components.

## 🎨 Styling

The application uses **vanilla CSS** with:

-   CSS Grid and Flexbox for layouts
-   CSS transitions for smooth animations
-   CSS variables via class switching for theme management
-   Mobile-first responsive design
-   Hover effects and interactive feedback

## 🔧 Configuration Files

### `tsconfig.json`

TypeScript compiler configuration with strict type checking enabled.

### `vite.config.ts`

Vite build tool configuration with React plugin.

### `package.json`

Project dependencies and npm scripts.

## 🐛 Troubleshooting

### Tasks not persisting after reload

Make sure your browser allows localStorage. Check browser console for errors.

### Theme not switching

Clear your browser cache and reload the application.

### TypeScript errors

Run `npm install` to ensure all type definitions are installed.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📝 Assignment Details

This project was built as part of a React learning assignment covering:

-   **Part 1**: Basic State Management with `useState`
-   **Part 2**: Side Effects and Data Persistence with `useEffect`
-   **Part 3**: Global State Management with `useContext`

Each part demonstrates essential React concepts and patterns used in modern web development.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Your Name

-   GitHub: [@yourusername](https://github.com/yourusername)
-   LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

-   React documentation and community
-   TypeScript team for excellent tooling
-   Vite for blazing fast development experience

## 📞 Support

If you have any questions or need help, please open an issue in the GitHub repository.

---

**Happy Task Managing! 🎉**
