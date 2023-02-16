import React from 'react';
import {Header, Footer, Logo} from '../views';
import {Link, Route, Routes} from 'react-router-dom';
import {Dashboard} from './Dashboard.page';
import {WeatherDetails} from './WeatherDetails.page';
import {BackButtonContainer} from '../viewModels/BackButton.viewModel';

export const MainLayout: React.FC = () => (
    <>
        <Header
            start={<BackButtonContainer />}
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
