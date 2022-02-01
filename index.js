require('dotenv').config()

const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {
    let opt = '';
    const busquedas = new Busquedas();

    do {
        opt = await inquirerMenu();

        switch ( opt ) {
            case 1: // Busqueda de cuidad
                const lugar = await leerInput('Cuidad: ')
                await busquedas.cuidad( lugar );

                break;

            case 2: // Historial de busqueda

                break;
        
            default:
                break;
        }

        if ( opt !== 0 ) await pausa();

    } while ( opt != 0 );
}

main();