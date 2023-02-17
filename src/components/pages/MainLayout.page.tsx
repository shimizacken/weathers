import React from 'react';
import {Header, Footer, Logo, LogoWrapper} from '../views';
import {Link, Route, Routes} from 'react-router-dom';
import {Dashboard} from './Dashboard.page';
import {WeatherDetails} from './WeatherDetails.page';
import {BackButtonContainer} from '../viewModels/BackButton.viewModel';
import {MetricContainer} from '../viewModels/MetricContainer.viewModel';

export const MainLayout: React.FC = () => (
    <>
        <Header
            start={<BackButtonContainer />}
            middle={
                <LogoWrapper>
                    <Link to="/">
                        <Logo />
                    </Link>
                </LogoWrapper>
            }
            end={<MetricContainer />}
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
