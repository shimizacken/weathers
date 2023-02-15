import React from 'react';
import {Text} from '../../Foundation/Text/Text.view';

export const DetailedWeather: React.FC<{currentTemperature: string}> = ({
    currentTemperature,
}) => {
    return (
        <article>
            <section className="">
                <Text size="huge">{currentTemperature}</Text>
            </section>
            <section></section>
        </article>
    );
};
