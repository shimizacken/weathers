import {createBrowserRouter} from 'react-router-dom';
import {Dashboard} from '../pages/Dashboard.page';

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
    },
]);
