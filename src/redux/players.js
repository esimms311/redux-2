// Types
const BENCH_PLAYER = 'players/BENCH_PLAYER';
const SEND_PLAYER_TO_COURT = 'players/SEND_PLAYER_TO_COURT';

// Initial State
var initialState = {
  court: [
    'Curry',
    'Durant',
    'Green',
    'Thompson',
    'McGee'
  ],
  bench: [
    'Livingston',
    'McCaw',
    'Petulia',
    'Iguodala',
    'Clark'
  ]
}

//Reducer
export default function reducer(state=initialState, action) {
  switch(action.type) {
    case SEND_PLAYER_TO_COURT:
      var newBench = Array.from(state.bench);
      var newCourt = Array.from(state.court);

      newBench.splice(newBench.indexOf(action.player), 1);
      newCourt.push(action.player);

      return Object.assign(
        {},
        state,
        {court: newCourt, bench: newBench}
      )

    case BENCH_PLAYER:
      state.court.splice(state.court.indexOf(action.player), 1);

      state.bench.push(action.player)

      return Object.assign(
        {},
        state,
        {court: [...state.court], bench: [...state.bench]}
      )

    default:
      return state;
  }
}

// Action Creators
export function benchPlayer(player) {
  return {
    type: BENCH_PLAYER,
    player: player
  }
}

export function sendPlayerToCourt(player) {
  return {
    type: SEND_PLAYER_TO_COURT,
    player: player
  }
}
