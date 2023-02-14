import React from 'react';
import {Header, Footer} from '../views';
import {RouterProvider} from 'react-router-dom';
import {Router} from '../viewModels/Router.viewModel';

export const MainLayout: React.FC = () => (
    <>
        <Header />
        <main>
            <RouterProvider router={Router} />
        </main>
        <Footer />
    </>
);
