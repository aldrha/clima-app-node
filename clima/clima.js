const axios = require('axios');



const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1d68ea6b8a4497714e64c990e4c85b37&units=metric`);

    return resp.data.main.temp;
};

module.exports = {
    getClima
};