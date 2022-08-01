import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllCars = () => {
    return axios(`${apiUrl}/cars`)
}

export const getOneCar = (id) => {
    return axios(`${apiUrl}/cars/${id}`)
}