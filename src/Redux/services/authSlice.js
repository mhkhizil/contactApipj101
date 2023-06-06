import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie";

const initialState = {
    user: null,
    token: null
}
export const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        addUser: (state, { payload }) => {
            state.userInfo = payload.userInfo,
                state.token = payload.token;
            Cookies.set('user', JSON.stringify(state.userInfo));
            Cookies.set('token', state.token);
        },
    }
})
export const { addUser } = authSlice.actions
export default authSlice.reducer