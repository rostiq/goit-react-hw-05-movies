import React from "react";
import { useParams } from "react-router-dom";
import { movieReviewApi } from "components/Services/API";
import { useState, useEffect } from "react";


const Review = () => {
    const { movieId } = useParams();
    const [rewievs, setRewiev] = useState([]);

    useEffect(() => {
        movieReviewApi(movieId).then(response => {
            setRewiev(response.data.results);
        });
    }, [movieId]);

    if (rewievs.length === 0) {
        return (
            <p>...</p>
        )
    }

    return (
        <ul>
            {rewievs.map(rewiev =>
                <li key={rewiev.id}
                    style={{
                        border: "1px solid black",
                        padding: "10px",
                    }}>
                    <p style={{
                        fontStyle: "italic",
                    }}>{rewiev.author} says:</p>
                    <p>{rewiev.content}</p>
                </li>
            )}
        </ul>

    )
};

export default Review;