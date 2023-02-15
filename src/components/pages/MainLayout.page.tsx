import React from 'react';
import {Header, Footer} from '../views';
import {RouterProvider} from 'react-router-dom';
import {Router} from '../viewModels/Router.viewModel';
import {Logo} from '../views/modules/logo/Logo.view';

export const MainLayout: React.FC = () => (
    <>
        <Header start={<Logo />} />
        <main>
            <RouterProvider router={Router} />
        </main>
        <Footer />
    </>
);
