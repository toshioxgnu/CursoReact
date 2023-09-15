import { dateFnsLocalizer } from 'react-big-calendar';
import esES from 'date-fns/locale/es';

import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';

const locales = {
    'es': esES,
}


export const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,    
    getDay,
    locales,    
  })
  