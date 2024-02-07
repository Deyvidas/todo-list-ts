import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';

import { tasksTodo } from './dataStorage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
    <React.StrictMode>
        <App tasksStorage={tasksTodo} />
    </React.StrictMode>
);
