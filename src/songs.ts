export const isTitleEmpty = (songTitle: string): boolean => {
  let isEmpty = songTitle.length === 0;

  return isEmpty;
};

export const doesTitleExist = (
  songTitle: string,
  songTitles: string[]
): boolean => {
  let songTitlesToLowerCase: string[] = [];

  songTitles.forEach((title) => {
    songTitlesToLowerCase.push(title.toLowerCase());
  });

  let doesExist = songTitlesToLowerCase.includes(songTitle.toLowerCase());

  return doesExist;
};

export const isTitleShort = (songTitle: string): boolean => {
  let isShort: boolean;
  const minimumTitleLength = 3;

  if (songTitle.length < minimumTitleLength) {
    isShort = true;
  } else {
    isShort = false;
  }

  return isShort;
};

export const isPlaylistFull = (songTitles: string[]): boolean => {
  let isFull: boolean;
  const minimumTitleLength = 5;

  if (songTitles.length >= minimumTitleLength) {
    isFull = true;
  } else {
    isFull = false;
  }

  return isFull;
};

export const addSong = (songTitle: string, songTitles: string[]): void => {
  songTitles.push(songTitle);
};

export const sortSongs = (songTitles: string[]): void => {
  songTitles.sort();
};

export const getSongsCount = (songTitles: string[]): number => {
  let songsCount = songTitles.length;

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
      break;

    case "limit":
      errorMessage = "La playlist está llena";
      break;

    default:
      errorMessage = "Ha petat";
      break;
  }

  return errorMessage;
};
