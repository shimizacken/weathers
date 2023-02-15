export type WeatherResult = {
    name: string;
    description?: string;
    country: string;
    currentTemperature: number;
    minTemperature: number;
    maxTemperature: number;
    displayCurrentTemperature: string;
    displayMinTemperature: string;
    displayMaxTemperature: string;
    visibility: string;
    humidity: string;
    sunrise: number;
    sunset: number;
    icon: string;
};
