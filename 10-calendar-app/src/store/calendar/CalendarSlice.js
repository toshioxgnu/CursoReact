import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

// const tempEvent = {
//     _id: new Date().getTime(),
//     title: 'Cumple Jefe',
//     notes: 'Comprar el pastel',
//     start: new Date(),
//     end: addHours( new Date(), 1 ),
//     bgColor: '#fafafa',
//     user: {
//         _id: "1233",
//         name: "Jose Gonzalez"
//   }
// }


export const CalendarSlice = createSlice({
    name : 'Calendar',
    initialState: {
       isLoadingEvents: true,
       events: [],
       activeEvent: null
   },
   reducers: {
      onSetActiveNote: (state, { payload }) => {
        state.activeEvent = payload;
      },
      onAddNewEvent: (state, {payload}) => {
        state.events.push( payload );
        state.activeEvent = null;

      },
      onUpdateEvent: (state, { payload }) => {
        state.events = state.events.map(
          event => {

            if(event._id === payload._id){
              return payload;
            }

            return event;
          }
        );
      },
      onDeleteEvent: (state ) => {
        if(state.activeEvent){
          state.events = state.events.filter( 
            event => event._id !== state.activeEvent._id
          );
          state.activeEvent = null;
        }

        
      },
      onLoadEvents: (state, { payload = [] }) => {
        state.isLoadingEvents = false;
        // state.events = payload
        payload.forEach( event => {
          const exists = state.events.some( dbEvent => dbEvent._id === event.id );
          if(!exists){
            state.events.push( event );
          }
        } );

      }
        
         
     }
});

// Action creators are generated for each case reducer function
export const { 
    onSetActiveNote,
    onAddNewEvent,
    onUpdateEvent,
    onDeleteEvent,
    onLoadEvents,
 } = CalendarSlice.actions;