import React from 'react'
import { NavBar, CalendarEvent } from '../'

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


  return (
    <>
       <NavBar /> 

       <Calendar
        culture='es'
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        messages={ getMessagesEs() }
        style={{ height: 'calc(100vh - 80px)' }}
        eventPropGetter={eventStyleGetter}
        components={{ 
          event: CalendarEvent,
         }}
      />
    </>
  )
}
