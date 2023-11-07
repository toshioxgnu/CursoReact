import React, { useEffect, useState } from 'react'
import { NavBar, CalendarEvent, CalendarModal, FabAddNew, FabDelete } from '../'

import { Calendar  } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { addHours } from 'date-fns';
import { getMessagesEs, localizer } from '../../helpers';
import { useUiStore, useCalendarStore, useAuthStore } from '../../hooks';


// const myEventsList = [
//   {
//   title: 'Cumple Jefe',
//   notes: 'Comprar el pastel',
//   start: new Date(),
//   end: addHours( new Date(), 2 ),
//   bgColor: '#fafafa',
//   user: {
//     _id: "1233",
//     name: "Jose Gonzalez"
//   }
// }
// ];


export const CalendarPage = () => {

  const { user } = useAuthStore();
  // console.log(user)
  const { openDateModal } = useUiStore();

  const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();

  const [lastView, setlastView] = useState(localStorage.getItem('lastView') || 'week');

  const eventStyleGetter = ( event, start, end , isSelected ) => {
    console.log({event})
    // console.log({event, start, end , isSelected });

    const isMyEvent = (event.user._id === user.uid ) || (user.uid === event.user._id ) ;

    const style = {
      backgroundColor: isMyEvent ? "#347cf7" : "#465660" ,
      borderRadius: '0px',
      opcity: 0.8,
      color: "white"
    }

    return {
      style
    }

  }

  const onDoubleClick = (e) => {
    openDateModal();
    console.log({ doubleClick: e })
  }

  const onSelect = (event) => {
    // console.log({ click: e });
    setActiveEvent(event);
  }

  const onViewChange = (e) => {
    localStorage.setItem('lastView', e);
    setlastView(e);
    // console.log({ viewChanged: e })
  }

  useEffect(() => {
    console.log('useEffect triggered')
    startLoadingEvents()
  }, []);

  return (
    <>
       <NavBar /> 

       <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        defaultView={ lastView }
        startAccessor="start"
        endAccessor="end"
        messages={ getMessagesEs() }
        style={{ height: 'calc(100vh - 80px)' }}
        eventPropGetter={eventStyleGetter}
        components={{ 
          event: CalendarEvent,
         }}
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelect }
        onView={ onViewChange }
      />

      <CalendarModal />
      <FabAddNew /> 
      <FabDelete /> 
    </>
  )
}
