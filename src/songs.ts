export const isTitleEmpty = (songTitle: string): boolean => {
  let isEmpty: boolean;
  // Asígnale a la variable isEmpty un true o un false dependiendo de si
  // la variable songTitle recibida tiene un string vacío o no

  if (songTitle.length === 0) {
    isEmpty = true;
  } else {
    isEmpty = false;
  }

  return isEmpty;
};

export const doesTitleExist = (
  songTitle: string,
  songTitles: string[]
): boolean => {
  let doesExist: boolean;
  // Asígnale a la variable doesExist un true o un false dependiendo de si
  // la variable title recibida ya existe en el array de títulos recibido

  if (songTitles.includes(songTitle)) {
    doesExist = true;
  } else {
    doesExist = false;
  }

  return doesExist;
};

export const isTitleShort = (songTitle: string): boolean => {
  let isShort: boolean;
  // Asígnale a la variable isShort un true o un false dependiendo de si
  // la variable title recibida tiene menos de 3 caracteres

  if (songTitle.length < 3) {
    isShort = true;
  } else {
    isShort = false;
  }

  return isShort;
};

export const isPlaylistFull = (songTitles: string[]): boolean => {
  let isFull: boolean;
  // Asígnale a la variable isFull un true o un false dependiendo de si
  // el array de títulos recibido tiene 5 o más elementos

  if (songTitles.length >= 5) {
    isFull = true;
  } else {
    isFull = false;
  }

  return isFull;
};

export const addSong = (songTitle: string, songTitles: string[]): void => {
  // Añade la variable title al array de títulos recibido
  songTitles.push(songTitle);
};

export const sortSongs = (songTitles: string[]): void => {
  // Ordena alfabéticamente el array de títulos recibido
  songTitles.sort();
};

export const getSongsCount = (songTitles: string[]): number => {
  let songsCount: number;
  // Asígnale a la variable songsCount el número de elementos del array recibido

  songsCount = songTitles.length;

  return songsCount;
};

export const removeSongByPosition = (
  songTitles: string[],
  position: number
): void => {
  // Elimina del array de títulos recibido el elemento que se encuentra en la posición recibida
  songTitles.splice(position, 1);
};

export const getErrorMessage = (errorCode: string): string => {
  let errorMessage: string;

  // A la variable anterior le tendrás que asignar un mensaje de error
  // dependiendo del código de error recibido
  // Si el código de error no es válido, asígnale un mensaje genérico
  // Éstos son los códigos de error y sus mensajes correspondientes:
  // - "required": "No has introducido ningún título"
  // - "exists": "La canción ya existe"
  // - "too-short": "El título es demasiado corto"
  // - "limit": "La playlist está llena"

  switch (errorCode) {
    case "required":
      errorMessage = "No has introducido ningún título";
      break;

    case "exists":
      errorMessage = "La canción ya existe";
      break;

    case "too-short":
      errorMessage = "El título es demasiado corto";

    case "limit":
      errorMessage = "La playlist está llena";

    default:
      errorMessage = "Ha petat"; //JEJE
      break;
  }

  return errorMessage;
};
