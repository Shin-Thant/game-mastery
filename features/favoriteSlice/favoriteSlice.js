import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const favoriteGamesFromLocal =
    typeof window !== "undefined" &&
    localStorage.getItem("gamemastery/favoriteGames")
        ? JSON.parse(localStorage.getItem("gamemastery/favoriteGames"))
        : [];

const initialState = {
    favoriteGames: [...favoriteGamesFromLocal],
};

// export const addGame = createAsyncThunk(
//     "favorite/addNewGame",
//     async (g, { getState }) => {
//         let newGame = g;

//         let exsitedGame = state?.favoriteGames?.find(
//             (game) => game?.id === newGame?.id
//         );

//         if (!exsitedGame) {
//             state.favoriteGames = [...state.favoriteGames, g];
//         } else {
//             state.favoriteGames = state.favoriteGames.map((game) =>
//                 exsitedGame?.id === game?.id ? exsitedGame : game
//             );
//         }

//         localStorage.setItem(
//             "gamemastery/favoriteGames",
//             JSON.stringify(getState().favorite.favoriteGames)
//         );
//     }
// );

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addNewGame: (state, action) => {
            // let newGame = action.payload;

            // let exsitedGame = state?.favoriteGames?.find(
            //     (game) => game?.id === newGame?.id
            // );

            // if (!exsitedGame) {
            //     state.favoriteGames = [...state.favoriteGames, action.payload];
            // } else {
            //     state.favoriteGames = state.favoriteGames.map((game) =>
            //         exsitedGame?.id === game?.id ? exsitedGame : game
            //     );
            // }

            state.favoriteGames = [...state.favoriteGames, action.payload];

            localStorage.setItem(
                "gamemastery/favoriteGames",
                JSON.stringify(state.favoriteGames)
            );
        },
        removeGame: (state, action) => {
            state.favoriteGames = state.favoriteGames.filter(
                (game) => game?.id !== action.payload
            );
            localStorage.setItem(
                "gamemastery/favoriteGames",
                JSON.stringify(state.favoriteGames)
            );
        },
    },
});

export const { addNewGame, removeGame } = favoriteSlice.actions;

export default favoriteSlice.reducer;
