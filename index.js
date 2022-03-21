require('dotenv').config()

const { leerInput, inquirerMenu, pausa, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {
    let opt = '';
    const busquedas = new Busquedas();

    do {
        opt = await inquirerMenu();

        switch ( opt ) {
            case 1: // Busqueda de cuidad

                // Mostrar mensaje
                const termino = await leerInput('Cuidad: ');

                //Busqueda de lugares
                const lugares = await busquedas.cuidad( termino );

                // Seleccion de lugares
                const idSelect = await listarLugares( lugares );
                if( idSelect === '0') continue;

                const lugarSelec = lugares.find( l => l.id == idSelect);

                busquedas.agregarHistorial( lugarSelec.nombre);

                const clima = await busquedas.climaLugar( lugarSelec.lat, lugarSelec.lng );
                console.log( clima);
                // Clima

                // Mostrar resultado
                console.clear();
                console.log('\nInformación de la cuidad\n'.green);
                console.log('Cuidad:', (lugarSelec.nombre).green);
                console.log('Lat:', lugarSelec.lat);
                console.log('Lng:', lugarSelec.lng);
                console.log('Temperatura:', clima.temp);
                console.log('Mínima:', clima.min);
                console.log('Máxima:', clima.max);
                console.log('Estado:', (clima.desc).green);

                break;
            case 2: // Historial de busqueda
                busquedas.historialCapitalizado.forEach( (lugar, i) => {
                    const idx = `${ i + 1 }.`.green;
                    console.log( `${idx}- ${lugar}`)
                });                
                break;
        
            default:
                break;
        }

        if ( opt !== 0 ) await pausa();

    } while ( opt != 0 );
}

main();