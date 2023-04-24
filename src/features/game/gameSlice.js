import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    edition: 0,
    players: [],
    randomized: false,
    neutrals: [],
    playerBuildings: []
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setEdition: (state, action) => {
            state.edition = action.payload;
        },
        setPlayers: (state, action) => {
            action.payload.forEach(element => {
                state.players.push(element)
            });
        },
        toggleRandomized: (state) => {
            state.randomized = !state.randomized;
        },
        setNeutrals: (state, action) => {
            state.neutrals.length = 0;
            action.payload.forEach(element => {
                state.neutrals.push(element)
            });
        },
        setPlayerBuildings: (state, action) => {
            state.playerBuildings.length = 0;
            action.payload.forEach(element => {
                state.playerBuildings.push(element)
            });
        }

    }
})

export const { setPlayers, setEdition, toggleRandomized, setNeutrals, setPlayerBuildings } = gameSlice.actions;

export default gameSlice.reducer;

export const players = (state) => state.game.players
export const game = (state) => state.game.edition