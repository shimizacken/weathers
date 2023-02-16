import React from 'react';
import {Units} from '../../utils';
import {MetricRadioButtons} from '../views/modules/MetricRadioButtons/MetricRadioButtons';

export const MetricContainer: React.FC = () => {
    const radioChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(
            '🚀 ~ file: MetricContainer.viewModel.tsx:8 ~ radioChanged ~ e.target.value',
            e.target.value
        );
        // const unit = Units[e.target.value];
    };

    return <MetricRadioButtons radioChanged={radioChanged} />;
};
