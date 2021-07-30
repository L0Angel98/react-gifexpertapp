export const getGifs = async ( category ) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=nbj2QUo1b7325VMN31E20xSOzo01hpF0`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gift = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gift;
};