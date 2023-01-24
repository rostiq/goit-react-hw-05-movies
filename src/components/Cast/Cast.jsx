import React from "react";
import { useParams } from "react-router-dom";
import { movieCastApi } from "components/Services/API";
import { useState, useEffect } from "react";
import noimage from "../../images/noimage.jpeg";


export const Cast = () => {
    const { movieId } = useParams();
    const [credits, setCredits] = useState([]);

    useEffect(() => {
        movieCastApi(movieId).then(response => {
            setCredits(response.data.cast);
        });
    }, [movieId]);

    console.log(credits);

    if (credits.length === 0) {
        return (
            <p>...</p>
        )
    }

    return (
        <ul style={{
            flexDirection: "row"
        }}>
            {credits.map(credit => {
                return (
                    <li key={credit.credit_id} style={{
                        width: "6rem"
                    }}>
                        <img src={credit.profile_path
                            ? `https://image.tmdb.org/t/p/w300${credit.profile_path}`
                            : noimage} alt="actor" />
                        <p>{credit.name}</p>
                    </li>
                );
            })}
        </ul>

    )
};

