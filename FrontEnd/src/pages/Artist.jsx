import React from 'react'
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from 'react-router-dom';
import SongList from '../components/SongList';
import { artistArray } from '../assets/database/artists'
import { songsArray } from '../assets/database/songs'
const Artist = () => {

  const { id } = useParams();

  const {name, banner} = artistArray.filter((currentArtistObj, index) => currentArtistObj._id === id)[0];
  const songArrayFromArtist = songsArray.filter((currentSongObj, index) => currentSongObj.artist === name);


  
  const randomIndex =  Math.floor(Math.random() * (songArrayFromArtist.length - 1));
  const ramdomIdFromArtist = songArrayFromArtist[randomIndex]._id;




  return (
    <>

      <div className="artist">
        <div className="artist__header" style={{ backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${banner})` }}>
          <h2 className='artist__title'>{name}</h2>
        </div>
        <div className="artist__body">
          <h2>Populares</h2>

          <SongList songsArray={songArrayFromArtist} />



        </div>
      </div>

      <Link to={`/song/${ramdomIdFromArtist}`}>
        <FontAwesomeIcon className="single-item__icon single-item__icon--artist" icon={faCirclePlay} />
      </Link>


    </>
  )
}

export default Artist