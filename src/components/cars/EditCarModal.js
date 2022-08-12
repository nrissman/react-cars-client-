import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import CarForm from '../shared/CarForm'
import { updateCarSuccess, updateCarFailure } from '../shared/AutoDismissAlert/messages'

const EditCarModal = (props) => {
    const { 
        user, show, handleClose, 
        updateCar, msgAlert, triggerRefresh
    } = props

    const [car, setCar] = useState(props.car)

    console.log('car in edit modal', car)

    const handleChange = (e) => {
        setCar(prevCar => {
            let updatedValue = e.target.value
            const updatedName = e.target.name

            console.log('this is the input type', e.target.type)

            if (e.target.type === 'number') {
                // this is looking at the input type, and changing it from the default, which is a string, into an actual number
                updatedValue = parseInt(e.target.value)
            }


            const updatedCar = {
                [updatedName]: updatedValue
            }
            return {
                ...prevCar,
                ...updatedCar
            }
        })
    }

    const handleSubmit = (e) => {
        // e equals the event
        e.preventDefault()

        updateCar(user, car)
            // if we're successful in the modal, we want the modal to close
            .then(() => handleClose())
            // send a success message to the user
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: updateCarSuccess,
                    variant: 'success'
                })
            })
            // if everything is successful, we need to trigger our refresh for the show page
            .then(() => triggerRefresh())
            // if there is an error, tell the user about it
            .catch(() => 
                msgAlert({
                    heading: 'Oh No!',
                    message: updateCarFailure,
                    variant: 'danger'
                })
            )
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <CarForm 
                    car={car}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Update Car"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditCarModal