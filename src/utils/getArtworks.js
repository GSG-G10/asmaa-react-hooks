export const getArtworks = () => {
  const url =
    "https://api.artic.edu/api/v1/artworks/search?q=painting&limit=30&fields=id,title,image_id,thumbnail";
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => {
      throw new Error(`Error in fetching art ${err}`);
    });
};

export const imageUrl = (id, width = 843) => `https://www.artic.edu/iiif/2/${id}/full/${width},/0/default.jpg`;