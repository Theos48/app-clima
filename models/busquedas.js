const axios = require('axios');

class Busquedas {

    //Opcinal
    historial = ['Coatzacoalcos', 'Madrid', 'San Jose'];

    constructor() {
        //TODO leer DB si existe

    }

    async cuidad( lugar = ''){

        try {
            const resp = await axios.get('https://reqres.in/api/users?page=2');
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