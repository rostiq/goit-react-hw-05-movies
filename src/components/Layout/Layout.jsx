import React from "react";
import { Outlet } from "react-router-dom";
import { Styled } from './Layout.styled'
import { Suspense } from 'react';

export const Layout = () => {
    return (
        <>
            <nav style={{
                display: "flex",
                gap: "1rem",
                padding: "1rem",
                margin: "1rem",

            }}>
                <Styled to="/">home</Styled>
                <Styled to="/movies">movies</Styled>
            </nav>
            <Suspense fallback={<p>loading...</p>}>
                <Outlet />
            </Suspense>
        </>
    );
};


