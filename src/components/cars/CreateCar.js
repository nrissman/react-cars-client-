import { useState } from 'react'

import CarForm from '../shared/CarForm'

const CreateCar = (props) => {
    const [car, setCar] = useState({
        name: '',
        type: '',
        age: '',
        adoptable: false
    })

    const handleChange = (e) => {
        setCar(prevCar => {
            const updatedValue = e.target.value
            const updatedName = e.target.name
            const updatedCar = {
                [updatedName]: updatedValue
            }
            return {
                ...prevCar,
                ...updatedCar
            }
        })
    }

    return <CarForm car={ car } handleChange={ handleChange } />
}

export default CreateCar