import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  //remove after developing the project completely...
  //token: 'BQBNrSnJmItXFa_db55WIyyHh6x_uZd0dxDOEitr3BiX9--u2wp4Hd9iyy7ljy6UxD0bb8Kpl1lqZA0iZECYRyyI7CZD49mJW4c9ONL0qjojFK8bi5-YpT-CEG5QIuWPNVI5Fuj_Y-h4wybJ2Oi5-2FQMMXsd1L56WW9SX0tbPRoKEMp',
};

const reducer = (state, action) => {
  console.log(action);
  //Action -> type, [payload:it is dynamically used]
  switch (action.type) {
    case "SET_USER":
        //this is where the dispatch function of App.js is being listened too
      return {
        ...state,
        user: action.user,
      };
      case 'SET_TOKEN':
          return{
              ...state,
              token: action.token,
          }
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
   {/*To set the discover weekly page*/}
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
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