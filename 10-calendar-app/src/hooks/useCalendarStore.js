import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onSetActiveNote, onUpdateEvent } from "../store";


export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const {events, activeEvent} = useSelector( state => state.calendar );

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveNote( calendarEvent ) );
    }

    const startSavingEvent = async ( calendarEvent ) => {
        // TODO: Llegar al backend 

        // todo bien 
        if( calendarEvent._id ){
            // Actualizando
            dispatch(onUpdateEvent({...calendarEvent}) )
        }else{
            // creando
            dispatch(onAddNewEvent({
                _id: new Date().getTime(),
                ...calendarEvent
            }))
        }
    }




    return {
        // propiedades
        activeEvent,
        events,

        // metodos 
        setActiveEvent,
        startSavingEvent,
    }
}
