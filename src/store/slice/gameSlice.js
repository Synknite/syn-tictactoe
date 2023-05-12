import { createSlice } from "@reduxjs/toolkit";

const winCase = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const initialState = {
  mode: 0,
  turn: 1,
  gameStatus: new Array(9).fill(0),
  score: {
    first: 0,
    second: 0,
  },
  isFinished: false,
  winner: 0,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    changeTurn: (state) => {
      state.turn = -state.turn;
    },
    changeStatus: (state, action) => {
      if (state.isFinished) {
        return;
      }
      state.gameStatus[action.payload.index] = state.turn;
      let winner = 0;
      const status = state.gameStatus;
      winCase.forEach((line) => {
        if (Math.abs(status[line[0]] + status[line[1]] + status[line[2]]) === 3)
          winner = status[line[0]];
      });
      if (winner === 0 && !status.includes(0)) {
        state.winner = "Tied";
        state.isFinished = true;
      }
      if (winner === 1) {
        state.isFinished = true;
        state.score.first++;
        state.winner = "Player 1 Wins";
      }
      if (winner === -1) {
        state.isFinished = true;

        state.score.second++;
        state.winner = "Player 2 Wins";
      }
      state.turn = -state.turn;
    },
    resetStatus: (state) => {
      state.gameStatus = initialState.gameStatus;
      state.isFinished = initialState.isFinished;
      state.winner = initialState.winner;
    },
    resetScore: (state) => {
      state.score = initialState.score;
      state.gameStatus = initialState.gameStatus;
      state.isFinished = initialState.isFinished;
      state.winner = initialState.winner;
    },
    addScore: (state, action) => {
      state.score.first += action.payload[0];
      state.score.second += action.payload[1];
    },
    reset: () => initialState
  },
});

export const { setMode, changeTurn, changeStatus, resetScore, resetStatus, reset } =
  gameSlice.actions;

export default gameSlice.reducer;
