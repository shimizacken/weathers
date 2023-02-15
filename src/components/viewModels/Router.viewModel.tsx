import {createBrowserRouter} from 'react-router-dom';
import {Dashboard} from '../pages/Dashboard.page';
import {WeatherDetails} from '../pages/WeatherDetails.page';

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
    },
    {
        path: 'weather/:locationName',
        element: <WeatherDetails />,
    },
]);
