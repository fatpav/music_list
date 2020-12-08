import {useState} from 'react';

const MusicContainer = () =>{

    const [music, setMusic] = useState({});

    const getMusic = () => {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(data => setMusic(data))
    }

    return (
        <div classname = 'music-viewer'>
            <h1>Check out THESE tunes, turkey!</h1>
            <MusicContainer/>
        </div>
    )
}

export default MusicContainer