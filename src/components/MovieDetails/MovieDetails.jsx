import { Suspense } from "react";
import { useParams } from "react-router-dom";
import { movieIdApi } from 'components/Services/API';
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Wrapper, GetBackBtn } from './MovieDetails.styled'
import { Styled } from 'components/Layout/Layout.styled';
import noimage from "../../images/noimage.jpeg";




const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieData, setMovieData] = useState({});
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";

    useEffect(() => {
        movieIdApi(movieId).then(setMovieData);
    }, [movieId]);

    const {
        title, poster_path, vote_average, overview, release_date
    } = movieData;

    const formattedDate = new Date(release_date).toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <Wrapper>
            <GetBackBtn to={backLinkHref}>get back</GetBackBtn>
            {movieData && <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: "center",
                alignItems: "flex-start",
                marginTop: "1rem"
            }}>
                <div style={{
                    display: 'flex',
                    flexShrink: 0,
                    width: '25vw'
                }}>
                    <img src={poster_path
                        ? `https://image.tmdb.org/t/p/w500${poster_path}`
                        : noimage} alt={title} />
                </div>
                <div>
                    <div>
                        <span>{title}</span>
                        <p>release: {formattedDate}</p>
                        <p>rate: {vote_average}</p>
                        <p>{overview || 'No desrition yet'}</p>
                    </div>

                    <div style={{
                        display: 'flex',
                        gap: '4vw',
                    }}>
                        <Styled to="cast">cast</Styled>
                        <Styled to="review">review</Styled>
                    </div>
                    <Suspense fallback={<p>loading...</p>}>
                        <Outlet />
                    </Suspense>
                </div>
            </div>}
        </Wrapper>
    )
}

export default MovieDetails;