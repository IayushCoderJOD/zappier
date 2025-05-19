import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainWrapper from '../MainWrapper.jsx';
import routes from './routes';

const Router = () => {
    return (
        <BrowserRouter>
            <MainWrapper>
                <main>
                    <Routes>
                        {routes.map((route) => (
                            <Route
                                key={`${route.path}_index`}
                                path={route.path}
                                element={
                                    <route.component />
                                }
                                exact
                            />
                        ))}
                    </Routes>
                </main>
            </MainWrapper>
        </BrowserRouter>
    );
};

export default Router;
