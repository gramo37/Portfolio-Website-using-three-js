import {configureStore} from "@reduxjs/toolkit"
import { mailReducer } from "./redux/reducers/mailReducer";

const store = configureStore({
    reducer: {
        mail: mailReducer
    }
});

export default store