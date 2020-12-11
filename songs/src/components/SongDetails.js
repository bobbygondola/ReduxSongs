import React from 'react';
import { connect } from 'react-redux';

function SongDetails(props) {
    console.log("DETAILS",props)
    const details = props.selectedSong

    if (!details){
        return <div>Select a song!</div>
    }

    return (
        <div>
            <div>
                <h3>Details for:</h3>
                <p>
                Title: {details.title}
                <br />
                Artist: {details.artist}
                <br />
                Duration: {details.duration}
                </p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedSong: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetails) 
