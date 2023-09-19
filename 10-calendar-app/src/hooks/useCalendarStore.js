import { useDispatch, useSelector } from "react-redux"
import { onSetActiveNote } from "../store";


export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const {events, activeEvent} = useSelector( state => state.calendar );

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveNote( calendarEvent ) );
    }




    return {
        // propiedades
        activeEvent,
        events,

        // metodos 
        setActiveEvent,
    }
}
