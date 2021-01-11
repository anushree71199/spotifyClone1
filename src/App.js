import React, { useEffect, useState } from "react";
import './App.css';
import Login from "./Login.js";
import {getTokenFromUrl} from "./spotify"
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player"
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi ();

function App() {
  // const [token , setToken ] = useState(null);
  //if we need anything to grab from the dataLayer do this 

  const [{token}, dispatch] = useDataLayerValue();
  useEffect(()=>{
    /*The token is stored in this*/
    const hash = getTokenFromUrl();//we got the token from the URL
    window.location.hash = "";
    const _token = hash.access_token;

if(_token){
  dispatch({
    type: 'SET_TOKEN',
    token: _token,
  })
  //setToken(_token) we stored that in this
   //to access the token we created for spotify
  spotify.setAccessToken(_token);
  //to test this works or not :
  spotify.getMe().then(user => {
    //to show the user what is been given to them
    //thrown at the reducer.js file
    dispatch({
      type: 'SET_USER',
      user: user
    });
  });
  spotify.getUserPlaylists().then((playlists) => {
    dispatch({
      type: 'SET_PLAYLISTS',
      playlists: playlists,
    });
  });
  spotify.getPlaylist('3A5EiVFxCqByCGvuv3tk01').then(response=>{
    dispatch({
      type: 'SET_DISCOVER_WEEKLY',
      discover_weekly: response,
    });
  });
  spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );
      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
}
   
  }, []);
  
  return (
    <div className="app">
    {!token && <Login />}
    {token && <Player spotify={spotify} />}
  </div>
  );
}

export default App;
