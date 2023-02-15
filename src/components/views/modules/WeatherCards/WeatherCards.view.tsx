import React, {PropsWithChildren} from 'react';
import styles from './WeatherCards.module.scss';

export const WeatherCards: React.FC<PropsWithChildren> = ({children}) => (
    <ul className={styles.wrapper}>{children}</ul>
);
