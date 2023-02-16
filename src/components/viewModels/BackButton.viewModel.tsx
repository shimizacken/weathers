import React from 'react';
import {useNavigate, useMatch} from 'react-router-dom';
import {Button} from '../views/elements/Button/Button.view';

export const BackButtonContainer: React.FC = () => {
    const match = useMatch('weather/:locationName');
    const navigate = useNavigate();

    if (!match) {
        return null;
    }

    return (
        <Button onClick={() => navigate('/')} noDesign>
            ⬅
        </Button>
    );
};
