import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:null
}

export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loadUser: (state,action) => {
            state.data = action.payload
        }
    }
})

export default UserSlice.reducer

export const { loadUser } = UserSlice.actions

