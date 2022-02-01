const axios = require('axios');

class Busquedas {

    //Opcinal
    historial = ['Coatzacoalcos', 'Madrid', 'San Jose'];

    constructor() {
        //TODO leer DB si existe

    }

    get paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        }
    }

    async cuidad( lugar = ''){

        try {
            const instance =  axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                params: this.paramsMapbox
            })

            const resp = await instance.get();
            
            console.log(resp.data);

            return [];
        } catch (error) {
            return [];
        }
        
        //peticion HTTP
        



        return []; //retornar los lugare
    }
}


module.exports =  Busquedas;