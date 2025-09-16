import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addTasks, deleteTask, toggleCheck } from '../Features/taskSlice';



const Tasks = () => {

    const tasks = useSelector((state) => state.task.tasks);
    const dispatch = useDispatch();
    const [description, setDescription] = useState("");
    const [add, setAdd] = useState(false);

    function handleAddTask(descr){
        dispatch(addTasks({
            desc: descr,
            status : false,
        }));

        setAdd(false);
        setDescription("");
    }


    return (
        <div className='h-screen bg-blue-100'>

            <div className='flex justify-between h-23 items-center mb-[2rem]'>
                <div className='w-[70%] flex justify-center align-center'>
                    <span className='text-[2.5rem] italic text-indigo-600'>All Tasks</span>
                </div>
                <button onClick={() => setAdd(true)} className=' bg-blue-300 mr-[2rem] p-[1rem] cursor-pointer border border-black-800 rounded-[1rem]'> Add a Task </button>
            </div>

            {add && (
                <div className='flex flex-col justify-around items-center h-[20%] w-[30%] border absolute bg-blue-200 top-1/5 left-1/2 -translate-x-1/2 -translate-y-1/2'>

                    <input type="text" placeholder='Enter Descrp of Task' onChange={(e) => setDescription(e.target.value)} className='p-[0.5rem] border w-[80%]' />
                    <button onClick={()=>handleAddTask(description)} className='px-[1rem] py-[0.5rem] border rounded-xl bg-blue-500 text-white-100 cursor-pointer outline-none'>Add Task</button>

                </div>
            )}


            <div className='border h-[80%] flex flex-col items-center overflow-scroll'>

                {tasks.map((val, idx) => (
                    <div key={idx} className='flex-shrink-0 border h-[4rem] w-[40%] mt-[1.5rem] flex justify-around items-center'>
                        <input type="checkbox" name="task" id="task" onChange={() => dispatch(toggleCheck(idx))} checked={val.status} className='h-[1.5rem] w-[1.5rem]' />
                        <label htmlFor="task" className='w-[70%] line-clamp-2'> {val.desc}</label>
                        <button onClick={() => dispatch(deleteTask(idx))} className='px-[0.7rem] py-[0.2rem] bg-blue-300 border rounded-xl cursor-pointer'>Delete</button>
                    </div>
                ))}

            </div>

        </div>



    )
}

export default Tasks
