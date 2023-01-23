import React from "react";
import { useParams } from "react-router-dom";
import { movieIdApi } from 'components/Services/API';
import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieData, setMovieData] = useState({});

    useEffect(()=>{
        movieIdApi(movieId).then(setMovieData);
    },[movieId]);

    const { 
        title, poster_path, vote_average, overview, release_date
    } = movieData;

    console.log(title);

    const formattedDate = new Date(release_date).toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
        });

    return (
        <>
            <button type="button" style={{margin: '1rem'}}>get back</button>
            {movieData && <div style={{
                display: 'flex',
                flexBasis: '50%',
                gap: '4vw',
            }}>
                <div style={{
                    width: '30vw',

                }}>
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                </div>
                <div>
                <div>
                    <p style={{
                        fontWeight: '900'
                    }}>{title}</p><p>release: {formattedDate}</p>
                    <p>rate: {vote_average}</p>
                    <p>{overview || 'No desrition yet'}</p>
                </div>
                
                <div style={{
                    display: 'flex',
                    gap: '4vw',
                }}>
                <Link to="cast">Cast</Link>
                <Link to="review">Review</Link>
                </div>
                <Outlet/>
                </div>
            </div>}
        </>
    )
}
