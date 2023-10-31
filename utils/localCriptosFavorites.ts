const toogleFavorite = (id: string) => {
  let favorites: string[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  if (favorites.includes(id)) {
    favorites = favorites.filter((assetId) => assetId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existInFavorites = (id: string): boolean => {
  if (typeof window === "undefined") return false;

  const favorites: string[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  return favorites.includes(id);
};

const criptomonedas = (): string[] => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

export default {
  toogleFavorite,
  existInFavorites,
  criptomonedas
};
