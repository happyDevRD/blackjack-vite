

export const crearCarta = (carta, divCarta) => {
        if(!carta) throw new Error('Es necesario la carta');

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');

        return imgCarta;
}