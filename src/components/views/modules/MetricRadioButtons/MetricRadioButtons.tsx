import React from 'react';
import {Units} from '../../../../utils';
import {RadioButton} from '../../elements/Radiobutton/RadioButton.view';
import styles from './MetricRadioButtons.scss';

export const MetricRadioButtons: React.FC<{
    radioChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({radioChanged, ...props}) => (
    <div {...props}>
        <RadioButton
            text="Celsius"
            value={Units.celsius.name}
            name="temperatureType"
            className={styles.radioButton}
            checked
            onChange={radioChanged}
            disabled={false}
        />
        <RadioButton
            text="Fahrenheit"
            value={Units.fahrenheit.name}
            name="temperatureType"
            className={styles.radioButton}
            onChange={radioChanged}
            disabled={false}
        />
        <RadioButton
            text="Kelvin"
            value={Units.kelvin.name}
            name="temperatureType"
            className={styles.radioButton}
            onChange={radioChanged}
            disabled={false}
        />
    </div>
);
