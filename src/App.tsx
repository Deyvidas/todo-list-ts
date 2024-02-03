import { tasksTodo } from "./dataStorage";
import TaskCardsContainer from "./components/TaskCardsContainer";

export default function App() {
    return (
        <div className="App">
            <TaskCardsContainer tasks={tasksTodo.tasks} />
        </div>
    );
}
