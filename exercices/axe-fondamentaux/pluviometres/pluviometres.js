// @ts-check

/**
 * Convertit un relevé en nombre.
 */
export function readRainfall(value) {
    let a = parseFloat(value);
    return a;
}

/**
 * Additionne deux relevés après les avoir convertis en nombres.
 */
export function totalRainfall(morning, evening) {
    let a = parseFloat(morning);
    let b = parseFloat(evening);

    return a + b;
}

/**
 * Indique si l'heure correspond à un relevé automatique (toutes les 3 heures).
 */
export function isScheduledHour(hour) {
    return (hour % 3 === 0);
}

/**
 * Indique si la conversion du relevé produit NaN.
 */
export function isFaultyReading(value) {
    return Number.isNaN(Number(value));
}

/**
 * Compare strictement deux relevés après conversion en nombres.
 */
export function isConfirmedReading(manual, automatic) {
    let a = parseFloat(manual);
    let b = parseFloat(automatic);

    return a === b;
}
