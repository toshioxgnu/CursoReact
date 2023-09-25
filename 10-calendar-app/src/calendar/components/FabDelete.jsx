import { useCalendarStore } from "../../hooks"

export const FabDelete = () => {

  const { startDeleteEvent, hasEventSelected } = useCalendarStore();

  const handleDelete = () => {
    // TODO: llegar al backend

    startDeleteEvent();
  }
 
 
  return (
    <button
        className="btn btn-danger fab-delete"
        onClick={ handleDelete }
        style={{ 
          display: hasEventSelected ? '' : 'none' 
         }}
    >
        <i className="fas fa-trash"></i>
    </button>
  )
}
