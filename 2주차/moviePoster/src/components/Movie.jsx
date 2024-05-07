import React, {useState} from 'react'
import '../index.css';
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280';
// 이거 어떻게 받아오는 건데 .. 


export default function Movie({title, poster_path, overview, vote_average }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='movie-container'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
            <img src={IMG_BASE_URL + poster_path} alt="영화포스터" />
                <div className='movie-info'>
                    <h4>{title}</h4>
                    <span>{vote_average}</span>
                </div>
                
            <div className='movie-script'
            style={{transform: isHovered  ? 'translateY(0)': 'translateY(102%'}}>
                <p>{title}</p>
                <p>{overview}</p>
            </div>
        </div>
    );
}



