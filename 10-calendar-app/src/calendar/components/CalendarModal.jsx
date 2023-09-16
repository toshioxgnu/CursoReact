import React, { useState } from 'react'

import Modal from 'react-modal'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const CalendarModal = () => {

    const [IsOpen, setIsOpen] = useState(true);

    const onCloseModal = () => {
        console.log('cerrando modal')
        setIsOpen(false);
    }

  return (
    <Modal
        isOpen={ IsOpen }
        onRequestClose={ onCloseModal }
        style={customStyles}
        contentLabel="EventModal"
        className="modal"
        overlayClassName="modal-fondo"
        closeTimeoutMS={ 200 }
    >
        <h1>Hola desde el Modal </h1>
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sapiente aliquam tempora eum iusto! Sequi voluptatum, rem, fuga iste quisquam cumque fugit ab vero placeat voluptas laudantium beatae veritatis dolore?</p>
    </Modal>
  )
}
