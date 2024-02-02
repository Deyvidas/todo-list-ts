export type TodoTasksType = {
    tasks: Array<TodoCardType>;
};

export type TodoCardType = {
    id: number;
    cardTitle: string;
    tasks: Array<TodoTaskType>;
};

export type TodoTaskType = {
    id: number;
    title: string;
    isDone: boolean;
};

export const tasksTodo2: TodoTasksType = {
    tasks: [],
};

export const tasksTodo: TodoTasksType = {
    tasks: [
        {
            id: 1,
            cardTitle: "Films to watch.",
            tasks: [
                { id: 1, title: "Terminator", isDone: true },
                { id: 2, title: "XXX", isDone: false },
                { id: 3, title: "Gentlemen's of fortune", isDone: true },
            ],
        },
        {
            id: 2,
            cardTitle: "To practice",
            tasks: [
                { id: 1, title: "TypeScript", isDone: true },
                { id: 2, title: "HTML", isDone: true },
                { id: 3, title: "React", isDone: false },
                { id: 3, title: "Python", isDone: true },
            ],
        },
    ],
};
