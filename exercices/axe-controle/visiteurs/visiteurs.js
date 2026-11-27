// @ts-check

export const UNIVERSITIES = [
  "Académie Babbage",
  "Institut Lovelace",
  "Université Hopper",
  "École Dijkstra",
  "Collège Von Neumann",
];

export const MASTER_REQUIRED = ["Institut Lovelace", "École Dijkstra"];

/**
 * Indique si une université est connue.
 */
export function isKnownUniversity(university) {
  for (let i in UNIVERSITIES) {
    if (UNIVERSITIES[i] === university) {
      return true;
    }
  }
  return false;
}

/**
 * Convertit un titre en niveau numérique.
 */
export function titleLevel(title) {
  switch (title) {
    case "Bachelor":
      return 1;
    case "Master":
      return 2;
    default:
      return 0;
  }
}

/**
 * Indique si une université exige un Master.
 */
export function requiresMaster(university) {
  for (let i in UNIVERSITIES) {
    for (let y in MASTER_REQUIRED) {
      if (UNIVERSITIES[i] === MASTER_REQUIRED[y]) {
        if (university === MASTER_REQUIRED[y]) {
          return true;
        }
      }
    }
  }
  return false;
}

/**
 * Indique si un visiteur est considéré comme fiable.
 */
export function isTrusted(university, title) {
  if (isKnownUniversity(university) && titleLevel(title) !== 0 && requiresMaster(university, title) === false || requiresMaster(university, title) === true && titleLevel(title) === 2) {
    return true;
  } else {
    return false;
  }
}

/**
 * Construit le message d'accueil selon l'université et le titre.
 */
export function welcomeMessage(university, title) {
  if (!isKnownUniversity(university)) {
    return "Université inconnue"
  } else if (titleLevel(title) === 0) {
    return "Titre inconnu"
  } else if (requiresMaster(university, title) && titleLevel(title) !== 2) {
    return "Master requis"
  } else {
    return "Bienvenue dans la Citadelle"
  }
}

/**
 * Vérifie que tous les visiteurs sont fiables.
 */
export function allTrusted(universities, titles) {
  let x = false
  let y = 0

  for (let v in universities) {
    x = isTrusted(universities[v], titles[v]);

    if (!x) {
      y++;
    }
  }

  return (y === 0)
}
