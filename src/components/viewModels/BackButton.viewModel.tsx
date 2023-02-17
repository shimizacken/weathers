import React from 'react';
import {useNavigate, useMatch} from 'react-router-dom';
import {BackButton} from '../views/elements/Button/BackButton.view';

export const BackButtonContainer: React.FC = () => {
    const match = useMatch('weather/:locationName');
    const navigate = useNavigate();

    if (!match) {
        return null;
    }

    return (
        <nav>
            <BackButton
                onClick={() => navigate('/')}
                aria-label="Back to previous page"
            />
        </nav>
    );
};
