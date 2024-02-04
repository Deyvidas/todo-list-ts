import TaskCardsContainer from './components/TaskCardsContainer';

import { tasksTodo } from './dataStorage';

export default function App() {
    return (
        <div className='App'>
            <TaskCardsContainer tasks={tasksTodo.tasks} />
        </div>
    );
}
