import React from 'react'
import { NavBar } from '../components/NavBar'

import { Calendar, momentLocalizer, dateFnsLocalizer  } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'

import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'


const locales = {
  'en-US': enUS,
}

const myEventsList = [{
  title: 'Cumple Jefe',
  notes: 'Comprar el pastel',
  start: new Date().setHours(13,0,0),
  end: new Date().setHours(14,0,0),
}];

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

export const CalendarPage = () => {
  return (
    <>
       <NavBar /> 

       <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 'calc(100vh - 80px)' }}
    />
    </>
  )
}
