import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../hooks"

export const FabAddNew = () => {

    const { openDateModal } = useUiStore();
    const { setActiveEvent } = useCalendarStore();

    const handleClickNew = () => {
        setActiveEvent({ 
            title: '',
            notes: '',
            start: new Date(),
            end: addHours( new Date(), 1 ),
            bgColor: '#fafafa',
            user: {
                _id: "1233",
                name: "Jose Gonzalez"
          }
        })
        openDateModal();
    }


  return (
    <button
        className="btn btn-primary fab"
        onClick={ handleClickNew }
    >
        <i className="fas fa-plus"></i>
    </button>
  )
}
