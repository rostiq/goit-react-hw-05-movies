import React from "react";
import { useParams } from "react-router-dom";
import { movieCastApi } from "components/Services/API";
import { useState, useEffect } from "react";


export const Cast = () => {
    const { movieId } = useParams();
    const [credits, setCredits] = useState([]);

    useEffect(() => {
        movieCastApi(movieId).then(setCredits);
    }, [movieId]);

    console.log(credits.cast);
 
    return (
        <>
         <p>cast in progress</p>
        </>
       
    )
};