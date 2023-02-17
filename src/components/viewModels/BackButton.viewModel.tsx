import React from 'react';
import {useNavigate, useMatch} from 'react-router-dom';
import {BackButton} from '../views/elements/Button/BackButton.view';

export const BackButtonContainer: React.FC = () => {
    const match = useMatch('weather/:locationName');
    const navigate = useNavigate();

    if (!match) {
        return null;
    }

    return <BackButton onClick={() => navigate('/')} />;
};
