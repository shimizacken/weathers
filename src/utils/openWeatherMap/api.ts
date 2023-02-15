const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?appid=';

export const addUnit = (unit: string) => (unit ? `&units=${unit}` : '');

export const buildBaseTokenUrl = (token: string, unit: string) =>
    `${baseUrl}${token}${unit}`;

export const buildFetchWeatherBaseURL = (token: string) => (unit: string) => {
    const metricType = addUnit(unit);
    const baseTokenUrl = buildBaseTokenUrl(token, metricType);

    return (queryStringParams: Record<string, string>) => {
        let url = '';

        Object.keys(queryStringParams).forEach((key: string) => {
            url += `&${key}=${encodeURIComponent(queryStringParams[key])}`;
        });

        return `${baseTokenUrl}${url}`;
    };
};

export const getBuildWeatherByCityNameUrlFn = (token: string, unit: string) => {
    unit = unit ? `&units=${unit}` : '';

    return (cityName: string) =>
        `${baseUrl}${token}${unit}&q=${encodeURIComponent(cityName)}`;
};

export const getFetchWeatherByGeographicCoordinatesFn = (
    token: string,
    unit: string
) => {
    unit = unit ? `&units=${unit}` : '';

    return (lat: number, lon: number) =>
        `${baseUrl}${token}${unit}&lat=${lat}&lon=${lon}`;
};

export const buildIconUrl = (icon: string) =>
    `http://openweathermap.org/img/w/${icon}.png`;
