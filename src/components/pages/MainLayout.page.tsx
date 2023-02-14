import React from 'react';
import {Header, Footer} from '../views';
import {Dashboard} from './Dashboard.page';

export const MainLayout: React.FC = () => (
    <>
        <Header />
        <main>
            <Dashboard />
        </main>
        <Footer />
    </>
);
