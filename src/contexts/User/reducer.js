export const reducer = (state, action) => {
  switch (action.type) {
    case "toggle_dark_theme":
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme
      }

    default:
      return state
  }
}

export const initialState = {
  isDarkTheme: true
}