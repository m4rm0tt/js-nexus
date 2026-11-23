// @ts-check

import {calculateEnergy} from "../../axe-fonctions/assemblage-modulaire/energie.js";

/**
 * Exécute un callback après un délai.
 */
export function runLater(callback, delay) {
    setTimeout(callback, delay);
}

/**
 * Transmet un message à un callback après un délai.
 */
export function sendSignal(message, delay, callback) {
    setTimeout(callback, delay, callback(message))
}

/**
 * Double une valeur puis la transmet à un callback après un délai.
 */
export function doubleLater(value, delay, callback) {
    setTimeout(callback, delay, callback(value*2))
}

/**
 * Construit un statut puis le transmet après un délai.
 */
export function delayedStatus(name, delay, callback) {
    setTimeout(callback, delay, callback(`${name} prêt`))
}
