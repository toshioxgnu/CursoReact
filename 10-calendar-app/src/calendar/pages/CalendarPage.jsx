import React, { useState } from 'react'
import { NavBar, CalendarEvent, CalendarModal } from '../'

import { Calendar  } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { addHours } from 'date-fns';
import { getMessagesEs, localizer } from '../../helpers';


const myEventsList = [{
  title: 'Cumple Jefe',
  notes: 'Comprar el pastel',
  start: new Date(),
  end: addHours( new Date(), 2 ),
  bgColor: '#fafafa',
  user: {
    _id: "1233",
    name: "Jose Gonzalez"
  }
}];


export const CalendarPage = () => {

  const [lastView, setlastView] = useState(localStorage.getItem('lastView') || 'week');

  const eventStyleGetter = ( event, start, end , isSelected ) => {
    // console.log({event, start, end , isSelected });

    const style = {
      backgroundColor: "#347cf7",
      borderRadius: '0px',
      opcity: 0.8,
      color: "white"
    }

    return {
      style
    }

  }

  const onDoubleClick = (e) => {
    console.log({ doubleClick: e })
  }

  const onSelect = (e) => {
    console.log({ click: e })
  }

  const onViewChange = (e) => {
    localStorage.setItem('lastView', e);
    setlastView(e);
    // console.log({ viewChanged: e })
  }

  return (
    <>
       <NavBar /> 

       <Calendar
        culture='es'
        localizer={localizer}
        events={myEventsList}
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
    </>
  )
}
