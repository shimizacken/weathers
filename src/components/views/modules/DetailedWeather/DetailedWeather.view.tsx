import React from 'react';
import {Text} from '../../Foundation/Text/Text.view';
import {AdditionalInfo} from '../AdditionalInfo/AdditionalInfo.view';
import styles from './DetailedWeather.module.scss';

export const DetailedWeather: React.FC<{currentTemperature: string}> = ({
    currentTemperature,
}) => {
    return (
        <article className={styles.wrapper}>
            <section>
                <Text size="huge">{currentTemperature}</Text>
            </section>
            <section className={styles.additionalInfoSection}>
                <div>
                    <AdditionalInfo
                        name="Sunrise"
                        value="05:40"
                        className={styles.additionalInfo}
                    />
                    <AdditionalInfo
                        name="Sunset"
                        value="20:26"
                        className={styles.additionalInfo}
                    />
                </div>
                <div>
                    <AdditionalInfo
                        name="Humidity"
                        value="26%"
                        className={styles.additionalInfo}
                    />
                    <AdditionalInfo
                        name="Visibility"
                        value="16.2km"
                        className={styles.additionalInfo}
                    />
                </div>
            </section>
        </article>
    );
};
