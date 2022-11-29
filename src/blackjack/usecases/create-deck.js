 import _ from 'underscore';
 
/**
 * Crea un nuevo Mazo y lo retorna
 * @param {Array<string>} tiposCartas Ejemplo: ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<string>} Retorna un nuevo deck de cartas
 */
 export const crearDeck = ( tiposCartas, tiposEspeciales) => {
 
    if(!tiposCartas) throw new Error('Tipos de cartas es obligatorio');

    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCartas ) {
            deck.push( i + tipo);
        };
    };

    for( let tipo of tiposCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        };
    };

    deck = _.shuffle( deck );
    return deck;
};
