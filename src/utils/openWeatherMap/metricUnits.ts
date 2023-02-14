export const Units = {
    kelvin: {
        name: 'kelvin',
        value: '',
        symbol: 'K',
    },
    celsius: {
        name: 'celsius',
        value: 'metric',
        symbol: '°C',
    },
    fahrenheit: {
        name: 'fahrenheit',
        value: 'imperial',
        symbol: '°F',
    },
};

export const getUnitNameByValue = (value: string) =>
    Object.values(Units).filter(unit => unit.value === value)?.[0];
