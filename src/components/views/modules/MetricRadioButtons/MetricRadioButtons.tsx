import React from 'react';
import {Units} from '../../../../utils';
import {RadioButton} from '../../elements/Radiobutton/RadioButton.view';
import styles from './MetricRadioButtons.module.scss';

export const MetricRadioButtons: React.FC<{
    radioChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checked: string;
}> = ({radioChanged, checked, ...props}) => (
    <div className={styles.wrapper} {...props}>
        <RadioButton
            text="Celsius"
            value={Units.celsius.value}
            name="temperatureType"
            className={styles.radioButton}
            onChange={radioChanged}
            disabled={false}
            checked={Units.celsius.value === checked}
        />
        <RadioButton
            text="Fahrenheit"
            value={Units.fahrenheit.value}
            name="temperatureType"
            className={styles.radioButton}
            onChange={radioChanged}
            disabled={false}
            checked={Units.fahrenheit.value === checked}
        />
    </div>
);
