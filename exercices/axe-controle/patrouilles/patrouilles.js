// @ts-check

/**
 * Additionne les numéros de ronde de 1 au nombre indiqué.
 */
export function sumRounds(numberOfRounds) {
    let a = 0;
    for(let i = 0; i < numberOfRounds; i++) {
        a += (i + 1);
    }
    return a;
}

/**
 * Compte le nombre de caractères d'un code.
 */
export function countSymbols(code) {
    a = 0;
    for(let letter of code) {
        a++;
    }
    return a;
}

/**
 * Compte le nombre de caractères `X` dans un code.
 */
export function countX(code) {
    let a = 0;
    for (let x of code) {
        if (x === "X") {
            a++
        }
    }
    return a;
}

/**
 * Calcule le nombre de tours complets possibles avant épuisement de l'énergie.
 */
export function turnsBeforeEmpty(energy, consumption) {
    
}

/**
 * Retourne la première ronde pour laquelle le total dépasse une limite.
 */
export function firstRoundAbove(limit) {
  // TODO
}
