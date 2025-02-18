import React from 'react'
import { songsArray } from '../assets/database/songs'
import Player from '../components/Player'
import { Link, useParams } from 'react-router-dom'
import { artistArray } from '../assets/database/artists'
const Song = () => {




  const songId = useParams().id
  const { image, name, duration, artist, audio } = songsArray.filter((currentSongObj, ) => currentSongObj._id === songId)[0];

  const artistObj = artistArray.filter((currentArtistObj) => currentArtistObj.name === artist)[0];

  const songArrayFromArtist = songsArray.filter((currentSongObj) => currentSongObj.artist === artist);

  const randomIndex = Math.floor(Math.random() * (songArrayFromArtist.length - 1));
  const ramdomIdFromArtist = songArrayFromArtist[randomIndex]._id;

  const randomIndex2 = Math.floor(Math.random() * (songArrayFromArtist.length - 1));
  const ramdomId2FromArtist = songArrayFromArtist[randomIndex2]._id;
  return (
    <>



      <div className="song">
        <div className="song__container">

          <div className="song__image-container">
            <img src={image} alt={name} />
          </div>



        </div>

        <div className="song__bar">
          <div className='song__artist-image'>

            <Link to={`/artist/${artistObj._id}`}>
              <img width={75} height={75}
                src={artistObj.image} alt={artist} />
            </Link>

          </div>

          <Player duration={duration} ramdomIdFromArtist ={ramdomIdFromArtist} ramdomId2FromArtist ={ramdomId2FromArtist} audio={audio} />

          <div >
            <p className='song_name'>{name}</p>
            <p>{artist}</p>
          </div>

        </div>


      </div>

    </>
  )
}

export default Song