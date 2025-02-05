import {createSlice} from '@reduxjs/toolkit';

interface User {
    userName: string;
    email: string;
    loggedIn: boolean,
}

const emptyState: User = {
    userName: "",
    email: "",
    loggedIn: false,
}

const storedUserString = localStorage.getItem("user");
const storedUser = storedUserString ? JSON.parse(storedUserString) : null;

const initialState: User = storedUser
    ? {
        ...emptyState,
        ...storedUser,
        loggedIn: true,
    }
    : emptyState;

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login(state, action) {
            localStorage.setItem("user", JSON.stringify(action.payload.response));
            Object.assign(state, action.payload.response);
            state.loggedIn = true;
        },
        logout(state) {
            Object.assign(state, emptyState);
            localStorage.removeItem("user");
        }
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;


