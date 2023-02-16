import React from 'react';
import {unitSignal} from '../../signals/unit.signals';
import {getUnitNameByValue, Units} from '../../utils';
import {MetricRadioButtons} from '../views/modules/MetricRadioButtons/MetricRadioButtons';

export const MetricContainer: React.FC = () => {
    const radioChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        const unit = getUnitNameByValue(e.target.value);

        localStorage.setItem('_unit_', unit.value);
        unitSignal.emit(unit.value);
    };

    return (
        <MetricRadioButtons
            radioChanged={radioChanged}
            checked={localStorage.getItem('_unit_') ?? Units.celsius.value}
        />
    );
};
