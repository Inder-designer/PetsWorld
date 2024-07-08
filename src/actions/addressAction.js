import { GET_ADDRESS_FAIL, GET_ADDRESS_SUCCESS, GET_ADDRESS_REQUEST, ADD_ADDRESS_FAIL, ADD_ADDRESS_REQUEST, ADD_ADDRESS_SUCCESS, REMOVE_ADDRESS_FAIL, REMOVE_ADDRESS_SUCCESS, REMOVE_ADDRESS_REQUEST, UPDATE_ADDRESS_FAIL, UPDATE_ADDRESS_REQUEST, UPDATE_ADDRESS_SUCCESS } from '../constants/addressConstants'
import axios from 'axios'
import { API_URL, CONFIG } from '../constants/apiConstants'
import { toast } from 'react-toastify'

// Get Address
export const getAddress = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ADDRESS_REQUEST })
        const { data } = await axios.get(`${API_URL}/address`, CONFIG)
        dispatch({ type: GET_ADDRESS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: GET_ADDRESS_FAIL, payload: error.response && error.response.data.message ? error.
                response.data.message : error.message
        })
        // toast.error(error.response && error.response.data.message ? error.response.data.message : error.message)
    }
}

// Add Address
export const addNewAddress = (address) => async (dispatch) => {
    try {
        dispatch({ type: ADD_ADDRESS_REQUEST })
        const { data } = await axios.put(`${API_URL}/address`, { address: address }, CONFIG)
        console.log(data.userAddresses);
        dispatch({ type: ADD_ADDRESS_SUCCESS, payload: data })
        toast.success('Address added successfully')
    } catch (error) {
        dispatch({
            type: ADD_ADDRESS_FAIL, payload: error.response && error.response.data.message ? error.
                response.data.message : error.message
        })
        toast.error(error.response && error.response.data.message ? error.response.data.message : error.
            message)
    }
}

// Remove Address
export const removeAddress = (id) => async (dispatch) => {
    try {
        dispatch({ type: REMOVE_ADDRESS_REQUEST })
        const { data } = await axios.delete(`${API_URL}/address/${id}`, CONFIG)
        dispatch({ type: REMOVE_ADDRESS_SUCCESS, payload: data })
        toast.success('Address remove successfully')
    } catch (error) {
        dispatch({
            type: REMOVE_ADDRESS_FAIL, payload: error.response && error.response.data.message ? error.
                response.data.message : error.message
        })
        toast.error(error.response && error.response.data.message ? error.response.
            data.message : error.message)
    }
}

// Update Address
export const updateAddress = (id, address) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_ADDRESS_REQUEST })
        const { data } = await axios.put(`${API_URL}/address/${id}`, {
            address:
                address
        }, CONFIG)
        dispatch({ type: UPDATE_ADDRESS_SUCCESS, payload: data })
        toast.success('Address updated successfully')
    } catch (error) {
        dispatch({
            type: UPDATE_ADDRESS_FAIL, payload: error.response && error.response.data.message ? error.
                response.data.message : error.message
        })
        toast.error(error.response && error.response.data.message ? error.response.
            data.message : error.message)
    }
}