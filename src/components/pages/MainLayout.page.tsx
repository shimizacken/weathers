import React from 'react';
import {Header, Footer} from '../views';
import {Link, Route, Routes} from 'react-router-dom';
import {Logo} from '../views/modules/Logo/Logo.view';
import {Dashboard} from './Dashboard.page';
import {WeatherDetails} from './WeatherDetails.page';

export const MainLayout: React.FC = () => (
    <>
        <Header
            middle={
                <Link to="/">
                    <Logo />
                </Link>
            }
        />
        <main>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route
                    index
                    path="weather/:locationName"
                    element={<WeatherDetails />}
                />
            </Routes>
        </main>
        <Footer />
    </>
);
