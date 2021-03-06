import React from 'react';
import { selectSong } from '../actions'
import { connect } from 'react-redux';

const SongList = (props) => {
    const songList = props.songs
    console.log(props)

    const renderList = () => {
        return songList.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            onClick={() => {props.selectSong(song)}}
                            className="ui button primary">
                            Select
                        </button>
                    </div>

                    <div className="content">
                        {song.title}
                    </div>
                </div>
            )
        })
    }
    return (
        <div className="ui divided list">
            {renderList()}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs
    }
}

export default connect(mapStateToProps, {selectSong})(SongList);
