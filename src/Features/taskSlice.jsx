import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: (localStorage.getItem("tasks")) ? JSON.parse(localStorage.getItem("tasks")) : [],
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {

        addTasks : (state, action)=>{
            const task = action.payload;
            state.tasks.push(task);
            localStorage.setItem("tasks", JSON.stringify(state.tasks));
        },

        deleteTask : (state, action) => {
            state.tasks.splice(action.payload, 1);
            localStorage.setItem("tasks", JSON.stringify(state.tasks));
        },

        toggleCheck: (state, action) =>{
            if(state.tasks[action.payload].status){
                state.tasks[action.payload].status = false;
                return;
            };
            state.tasks[action.payload].status = true;
            localStorage.setItem("tasks", JSON.stringify(state.tasks));
        }
    }
})

export const {addTasks, deleteTask, toggleCheck} = taskSlice.actions;
export default taskSlice.reducer;