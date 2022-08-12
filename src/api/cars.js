import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllCars = () => {
    return axios(`${apiUrl}/cars`)
}

export const getOneCar = (id) => {
    return axios(`${apiUrl}/cars/${id}`)
}

export const createCar = (user, newCar) => {
    console.log('this is user', user)
    console.log('this is newCar', newCar)
	return axios({
		url: apiUrl + '/cars',
		method: 'POST',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: { car: newCar },
	})
}

// UPDATE
export const updateCar = (user, updatedCar) => {
    console.log('this is updatedCar', updatedCar)
	return axios({
		url: `${apiUrl}/cars/${updatedCar.id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: { car: updatedCar }
	})
}

// DELETE
export const removeCar = (user, carId) => {
    return axios({
        url: `${apiUrl}/cars/${carId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}