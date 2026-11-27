// @ts-check

import {calculateEnergy} from "../../axe-fonctions/assemblage-modulaire/energie.js";

/**
 * Exécute un callback après un délai.
 * @param callback {function} Fonction à éxecuter après le delay
 * @param delay {number} Temps avant execution de la fonction
 */
export function runLater(callback, delay) {
    setTimeout(callback, delay);
}

/**
 * Transmet un message à un callback après un délai.
 * @param message {string} Message à transmettre au callback
 * @param delay {number} Temps avant execution de la fonction
 * @param callback {function} Fonction à executer après le délai
 */
export function sendSignal(message, delay, callback) {
    setTimeout(callback, delay, callback(message))
}

/**
 * Double une valeur puis la transmet à un callback après un délai.
 * @param value {number} Valeur à doubler
 * @param delay {number} Temps avant execution de la fonction
 * @param callback {function} Fonction à éxecuter après le delai
 */
export function doubleLater(value, delay, callback) {
    setTimeout(callback, delay, callback(value*2))
}

/**
 * Construit un statut puis le transmet après un délai.
 * @param name {string} Nom du statut à construir
 * @param delay {number} Temps avant execution de la fonction
 * @param callback {function} Fonction à executer après le delai
 */
export function delayedStatus(name, delay, callback) {
    setTimeout(callback, delay, callback(`${name} prêt`))
}
