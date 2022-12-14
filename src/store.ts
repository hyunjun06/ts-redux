import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAction, createReducer } from "@reduxjs/toolkit";

interface todo {
    text: string;
    id: number;
};

// const addTodo = createAction<todo>("todos/addTodo");
// const removeTodo = createAction<number>("todos/removeTodo");
// 
// export const actionCreators = {
//     addTodo,
//     removeTodo,
// }
// 
// const reducer = createReducer([], {
//     [addTodo.type]: (state: todo[], action: PayloadAction<todo>) => {
//         state.push(action.payload);
//     },
//     [removeTodo.type]: (state, action: PayloadAction<number>) => { 
//         return state.filter((todo: todo) => todo.id !== action.payload);
//     },
// });

const todos = createSlice({
    name: "todos",
    initialState: [] as todo[],
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
        },
        remove: (state, action) => {
            return state.filter((todo: todo) => todo.id !== action.payload);
        },
    },
});

const store = configureStore({ reducer: todos.reducer });

export const { add, remove } = todos.actions;

export default store;