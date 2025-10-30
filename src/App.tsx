import { ThemeProvider } from "./context/ThemeContext";
import { TaskManager } from "./components/TaskManager";
import "./App.css";

export default function App() {
    return (
        <ThemeProvider>
            <TaskManager />
        </ThemeProvider>
    );
}
