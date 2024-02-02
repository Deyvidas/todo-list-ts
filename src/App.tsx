import { TodoCards } from "./TodoList";
import { tasksTodo } from "./dataStorage";

export default function App() {
    return (
        <div className="App">
            <TodoCards {...tasksTodo} />
        </div>
    );
}
