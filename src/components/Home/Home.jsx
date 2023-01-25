import React from 'react';
import { trendingApi } from 'components/Services/API';
import { useState, useEffect } from 'react';
import { Wrapper } from 'components/MovieDetails/MovieDetails.styled';
import { StyledList } from './Home.styled'

const Home = () => {
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        trendingApi().then(setTrending);
    }, [])

    return (
        <Wrapper>
            <>
                <h2>
                    Trending today
                </h2>
                <ul>
                    {trending.map(({ id, title }) => (
                        <li key={id}>
                            <StyledList to={`/movies/${id}`} state={{ from: "/" }}>
                                {title}
                            </StyledList >
                        </li>
                    ))
                    }
                </ul>
            </>
        </Wrapper>

    )
};


export default Home;
