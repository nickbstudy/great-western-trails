import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    player1: "",
    player2: "",
    player3: "",
    player4: "",
    game: 0,
    randomized: false
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        enterNames: (state, action) => {
            
        }
    }
})