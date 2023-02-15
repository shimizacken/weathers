import React from 'react';
import type {WeatherResult} from '../../../../types/types';
import {Text} from '../../Foundation/Text/Text.view';
import {AdditionalInfo} from '../AdditionalInfo/AdditionalInfo.view';
import styles from './DetailedWeather.module.scss';

export const DetailedWeather: React.FC<{weather?: WeatherResult}> = ({
    weather,
}) => {
    return (
        <article className={styles.wrapper}>
            <section>
                <Text size="huge">{weather?.displayCurrentTemperature}</Text>
            </section>
            <section className={styles.additionalInfoSection}>
                <div>
                    <AdditionalInfo
                        name="Sunrise"
                        value={weather?.sunrise ?? ''}
                        className={styles.additionalInfo}
                    />
                    <AdditionalInfo
                        name="Sunset"
                        value={weather?.sunset ?? ''}
                        className={styles.additionalInfo}
                    />
                </div>
                <div>
                    <AdditionalInfo
                        name="Humidity"
                        value={weather?.humidity ?? ''}
                        className={styles.additionalInfo}
                    />
                    <AdditionalInfo
                        name="Visibility"
                        value={weather?.visibility ?? ''}
                        className={styles.additionalInfo}
                    />
                </div>
            </section>
        </article>
    );
};
