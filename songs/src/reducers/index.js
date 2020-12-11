import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            title: "American Wasteland",
            artist: "Nascar Aloe",
            duration: "1:30"
        },
        {
            title: "SPMO",
            artist: "Nascar Aloe",
            duration: "1:53"
        },
        {
            title: "Save Me",
            artist: "XXXTentacion",
            duration: "2:45"
        },
        {
            title: "HOUSTONFORNICATION",
            artist: "Nascar Aloe",
            duration: "3:40"
        },
        {
            title: "I Don't Wanna Do This Anymore",
            artist: "XXXTentacion",
            duration: "1:29"
        }
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});