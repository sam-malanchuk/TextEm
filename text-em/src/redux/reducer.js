// import action types
import {
    SEND_SMS_START,
    SEND_SMS_SUCCESS,
    SEND_SMS_FAILED,
} from './actions'

// state initial values
const initialState = {
    sendLoading: false,
    sendError: null,
    sendConfirm: false,
}

export default function(state = initialState, action) {
	switch (action.type) {
        case SEND_SMS_START: {
            return {
                ...state,
                sendLoading: true,
            }
        }
        case SEND_SMS_SUCCESS: {
            return {
                ...state,
                sendLoading: false,
                sendConfirm: true,
            }
        }
        case SEND_SMS_FAILED: {
            return {
                ...state,
                sendLoading: false,
                sendError: action.payload,
            }
        }
        default:
            return state
    }
}