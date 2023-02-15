import React from 'react';
import {Heading} from '../../Foundation/Heading/Heading.view';
import styles from './Heading.module.scss';

export const WeatherTitle: React.FC<{locationName: string}> = ({
    locationName,
}) => (
    <div className={styles.wrapper}>
        <Heading headingTag="h1">{locationName}</Heading>
    </div>
);
