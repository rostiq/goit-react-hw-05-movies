import React from "react";
import { useSearchParams } from "react-router-dom";
import { queryApi } from "components/Services/API";
import { useState } from "react";
import { useEffect } from "react";
import { Wrapper } from 'components/MovieDetails/MovieDetails.styled';
import {StyledList} from 'components/Home/Home.styled'



const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query");
    const [queryData, setQueryData] = useState(null);

    useEffect(() => {
        if (query) {
            queryApi(query).then(setQueryData);
        }
    }, [query]);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        setSearchParams({ query: form.elements.query.value });
        form.reset();
    };

    return (
        <>
            <Wrapper>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="query" placeholder="type here" autoComplete="off" />
                    <button type="submit">enter</button>
                </form>
                {queryData &&
                    <ul>
                        {queryData.data.results.map(({ id, title }) => (
                            <li key={id}>
                                <StyledList to={`/movies/${id}`} state={{ from: `/movies?query=${query}` }}>
                                    {title}
                                </StyledList >
                            </li>
                        ))
                        }
                    </ul>

                }
            </Wrapper>


        </>
    );
}

export default Movies;

