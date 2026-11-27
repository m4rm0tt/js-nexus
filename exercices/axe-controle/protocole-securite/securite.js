// @ts-check

/**
 * Valide une quantité d'énergie.
 */
export function validateEnergy(energy) {
    if (energy < 0) {
        throw new Error("Énergie invalide")
    }
    else {
        return energy;
    }
}
/**
 * Vérifie une énergie sans propager l'exception.
 */
export function safeEnergyCheck(energy) {
    try {
        validateEnergy(energy);

        return "Énergie valide"
    } catch (error) {
        return "Énergie invalide"
    }
}

/**
 * Valide un code de porte autorisé.
 */
export function validateGateCode(code) {
    switch (code) {
        case "ALPHA":
            return "ALPHA";

        case "BETA":
            return "BETA";

        case "OMEGA":
            return "OMEGA";

        default:
            throw new Error("Code inconnu")
    }
}

/**
 * Vérifie un code de porte sans propager l'exception.
 */
export function safeGateCheck(code) {
    try {
        validateGateCode(code);
        return "Code accepté"
    } catch (error) {
        return "Code refusé"
    }
}

/**
 * Compte les tentatives valides représentées par `A` ou `B`.
 */
export function countValidAttempts(text) {
    var x = 0;

    for (let i of text) {
        if(i == "A" || i == "B"){
            x++;
        }
    }

    return x;
}

/**
 * Compte les tentatives effectuées jusqu'au troisième `X` ou à la fin.
 */
export function attemptsBeforeLock(sequence) {
    var x = 0;
    var y = 0;

    for (let i of sequence) {
        if(i == "X"){
            x++;
        }
        y++;

        if (x>=3) {
            return y;
        }
    }
    return y;
}
