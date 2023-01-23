
import React from "react";
import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <nav style={{
                display: "flex",
                gap: "1rem",
                padding: "1rem",
                margin: "1rem",

      }}>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
            </nav>
            <Outlet/>
        </>     
);};


