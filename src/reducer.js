export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQCE7CI2JAgw-O2SE3DeNURxTfey5h12ihDqioTQIoBFQ1vDp_e5by88TbLjEs203Ee6Ttx3phZl6u3a7nEf3wmwo4IgNNueKC6nSSiNvZXKsHFCDskuhPNp6OHZdP9jaD-vQUkNb0QFgy6O1NOKjHyPAFCmZ4igcax3CUB0jBARK_32",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
