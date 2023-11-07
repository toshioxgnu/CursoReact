import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveNote, onUpdateEvent } from "../store";
import calendarApi from "../api/calendarApi";
import { convertEventsToDateEvents } from "../helpers";
import Swal from "sweetalert2";


export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const {events, activeEvent} = useSelector( state => state.calendar );
    const {user} = useSelector( state => state.auth );


    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveNote( calendarEvent ) );
    }

    const startSavingEvent = async ( calendarEvent ) => {

        try {
            if( calendarEvent._id ){
                // Actualizando
    
                const {} = calendarApi.put(`/events/${calendarEvent._id}`, calendarEvent);
    
                dispatch(onUpdateEvent({...calendarEvent, user}) );
                return;
            }
                // creando
            const { data } = await calendarApi.post('/events', calendarEvent);
    
    
            dispatch(onAddNewEvent({
                ...calendarEvent,
                _id: data.evento._id,
                user,
                
            }));
            
        } catch (error) {
            console.error(error);
            Swal.fire('Error', error.response.data.msg, 'error');
        }


        
    }

    const startDeleteEvent = async () => {

        try {
            
            await calendarApi.delete(`/events/${activeEvent._id}`);

            dispatch(onDeleteEvent());
        } catch (error) {
            console.error(error);
            Swal.fire('Error', error.response.data.msg, 'error');
        }


        
    }

    const startLoadingEvents = async () => {  
        try {

            const {data} = await calendarApi.get('/events');
            console.log({data})
            const events = convertEventsToDateEvents( data.objects);
            console.log(events);
            dispatch( onLoadEvents(events) );

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
