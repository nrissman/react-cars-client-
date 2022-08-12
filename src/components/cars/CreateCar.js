import { useState } from 'react'
import { createCar } from '../../api/cars'
import { useNavigate } from 'react-router-dom'
import { createCarSuccess, createCarFailure } from '../shared/AutoDismissAlert/messages'
import CarForm from '../shared/CarForm'

const CreateCar = (props) => {
    console.log('these are the props in createCar\n', props)
    const { user, msgAlert } = props

    const navigate = useNavigate()

    const [car, setCar] = useState({
        name: '',
        make: '',
        model: '',
        year: ''
    })

    console.log('this is car in createCar', car)

    const handleChange = (e) => {
        setCar(prevCar => {
            let updatedValue = e.target.value
            const updatedName = e.target.name

            console.log('this is the input type', e.target.type)

            if (e.target.type === 'number') {
                // this is looking at the input type, and changing it from the default, which is a string, into an actual number
                updatedValue = parseInt(e.target.value)
            }

            // this handles the checkbox, changing on to true etc
            if (updatedName === "adoptable" && e.target.checked) {
                updatedValue = true
            } else if (updatedName === "adoptable" && !e.target.checked) {
                updatedValue = false
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

    // We'll add a handleSubmit here that makes an api request, then handles the response
    const handleSubmit = (e) => {
        // e equals the event
        e.preventDefault()

        createCar(user, car)
            // if we're successful, navigate to the show page for the new pet
            .then(res => { navigate(`/cars/${res.data.car.id}`)})
            // send a success message to the user
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: createCarSuccess,
                    variant: 'success'
                })
            })
            // if there is an error, tell the user about it
            .catch(() => 
                msgAlert({
                    heading: 'Oh No!',
                    message: createCarFailure,
                    variant: 'danger'
                })
            )
    }

    return (
        <CarForm 
            car={ car } 
            handleChange={ handleChange }
            handleSubmit={ handleSubmit }
            heading="Add a new car!"
        />
    )
}

export default CreateCar