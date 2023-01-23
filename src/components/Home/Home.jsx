import React from 'react';
import { trendingApi } from 'components/Services/API';
import { useState, useEffect } from'react';
import { Link } from 'react-router-dom';

export const Home = () => {
    const [trending, setTrending] = useState([]); 

    useEffect(() => {
      getTrending();
    },[])
  
    const getTrending = () => {
        trendingApi().then(data => {
          setTrending(data);
        })
        .catch(err => {
        console.log(err)
        })
    }
    
    return (
        <>
            <h2>
                Trending today
            </h2>
            <ul>
                {trending.map( ({id, title}) =>(
                    <li key={id}>
                        <Link to={`/movies/${id}`}>
                            {title}
                        </Link >
                    </li>
                ))

                }
            </ul>
        </>
    )
};

