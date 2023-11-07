import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveNote, onUpdateEvent } from "../store";
import calendarApi from "../api/calendarApi";
import { convertEventsToDateEvents } from "../helpers";


export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const {events, activeEvent} = useSelector( state => state.calendar );
    const {user} = useSelector( state => state.auth );


    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveNote( calendarEvent ) );
    }

    const startSavingEvent = async ( calendarEvent ) => {
        // TODO: Update Event

        // todo bien 
        if( calendarEvent._id ){
            // Actualizando
            dispatch(onUpdateEvent({...calendarEvent}) )
        }else{
            // creando
            const { data } = await calendarApi.post('/events', calendarEvent);


            dispatch(onAddNewEvent({
                ...calendarEvent,
                _id: data.evento._id,
                user,
                
            }))
        }
    }

    const startDeleteEvent = () => {

        // TODO: Llegar al backend


        dispatch(onDeleteEvent());
    }

    const startLoadingEvents = async () => {  
        try {

            const {data} = await calendarApi.get('/events');
            console.log({data})
            const events = convertEventsToDateEvents( data.objects);
            console.log(events)

        } catch (error) {
            console.error('Error cargando eventos');

            console.error(error);
        }
    }

    return {
        // propiedades
        activeEvent,
        events,
        hasEventSelected: !!activeEvent,

        // metodos 
        setActiveEvent,
        startSavingEvent,
        startDeleteEvent,
        startLoadingEvents,
    }
}
