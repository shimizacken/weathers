export const getGeoLocation = (
    success: (position: GeolocationPosition) => void,
    error: () => void
) => {
    if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition(success, error);
    } else {
        console.info('Geolocation is not supported by your browser');
    }
};
