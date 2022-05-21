import {createReducer} from "@reduxjs/toolkit"

export const mailReducer = createReducer({}, {
    SEND_MAIL_REQ: (state, action) => {
        state.loading = true
        state.error = ""
        state.message = ""
    },
    SEND_MAIL_SUCCESS: (state, action) => {
        state.loading = false
        state.error = ""
        state.message = action.payload
    },
    SEND_MAIL_FAIL: (state, action) => {
        state.loading = false
        state.error = action.payload
        state.message = ""
    },
}) 