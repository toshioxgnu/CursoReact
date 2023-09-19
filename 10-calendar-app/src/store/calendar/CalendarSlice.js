import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
    _id: new Date().getTime(),
    title: 'Cumple Jefe',
    notes: 'Comprar el pastel',
    start: new Date(),
    end: addHours( new Date(), 2 ),
    bgColor: '#fafafa',
    user: {
        _id: "1233",
        name: "Jose Gonzalez"
  }
}


export const CalendarSlice = createSlice({
    name : 'Calendar',
    initialState: {
       events: [tempEvent],
       activeEvent: null
   },
   reducers: {
      onSetActiveNote: (state, { payload }) => {
        state.activeEvent = payload;
      },
        
         
     }
});

// Action creators are generated for each case reducer function
export const { 
    onSetActiveNote
 } = CalendarSlice.actions;