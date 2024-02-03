import {createSlice, nanoid} from '@reduxjs/toolkit';

// export const todoSlice = createSlice({
//     name: 'todo',
//     initialState: {
//         todos: []
//     },
//     reducers: {
//         addTodo: (state, action) => {
//             state.todos.push({
//                 id: nanoid(),
//                 text: action.payload,
//                 completed: false
//             });
//         },
//         toggleTodo: (state, action) => {
//             const todo = state.todos.find(todo => todo.id === action.payload);
//             if (todo) {
//                 todo.completed = !todo.completed;
//             }
//         },
//         deleteTodo: (state, action) => {
//             state.todos = state.todos.filter(todo => todo.id !== action.payload);
//         }
//     }
// });

const initialState = {
    todos: [{id:1, text: 'Buy groceries', completed: false}]
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: nanoid(),
                text: action.payload,
                completed: false
            });
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
    }
});