import React from 'react'
import { NavBar } from '../components/NavBar'

import { Calendar  } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { addHours } from 'date-fns';
import { getMessagesEs, localizer } from '../../helpers';




const myEventsList = [{
  title: 'Cumple Jefe',
  notes: 'Comprar el pastel',
  start: new Date(),
  end: addHours( new Date(), 2 ),
  bgColor: '#fafafa'
}];


export const CalendarPage = () => {
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
      />
    </>
  )
}
