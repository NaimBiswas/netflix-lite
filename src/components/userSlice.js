import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userReduce'
export default configureStore({
   reuducer: {
      user: userReducer,
   }

})