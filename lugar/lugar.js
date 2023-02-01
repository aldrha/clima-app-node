const axios = require('axios');

const getLugarLatLng = async (dir) => {
    const encodedURL = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://spott.p.rapidapi.com/places?q=${encodedURL}`,
        headers: {
            'X-RapidAPI-Key': 'a8f977307bmsh10f972cf1a97fbep1aa495jsn7fa9c7a5e14c',
            'X-RapidAPI-Host': 'spott.p.rapidapi.com',
        }
    });

    const resp = await instance.get();

    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }
    const data = resp.data[0];
    const direccion = data.name;
    const lat = data.coordinates.latitude;
    const lng = data.coordinates.longitude;

    return {
        direccion,
        lat,
        lng
    };
};




module.exports = {
    getLugarLatLng
};