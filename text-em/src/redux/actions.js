// import axios
import axios from 'axios';

// define action types
export const SEND_SMS_START = 'SEND_SMS_START';
export const SEND_SMS_SUCCESS = 'SEND_SMS_SUCCESS';
export const SEND_SMS_FAILED = 'SEND_SMS_FAILED';

// define the base API URL
const API_URL = 'http://localhost:4070';

// action creators

// send sms function makes an API request to send an SMS to a number
export function send_sms(payload) {
    return (dispatch) => {
        dispatch({ type: SEND_SMS_START })

        return axios.post(`${API_URL}/send`, payload)
            .then((res) => {
                dispatch({ type: SEND_SMS_SUCCESS, payload: res.data })
            })
            .catch((err) => {
                console.log('error seems to be', err)
                dispatch({ type: SEND_SMS_FAILED, payload: err })
            })
    }
}