import {configureStore} from '@reduxjs/toolkit'
import taskSlice from './taskSlice.jsx';


export const taskStore = configureStore({

    reducer: {
        task : taskSlice,
    }

});