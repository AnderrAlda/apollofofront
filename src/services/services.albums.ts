import axios from "axios";

const baseUrl = "https://apollofybackend2-production.up.railway.app/api/album";

export const addAlbum = async (albumData: {
  name: string;
  imageUrl: string;
}) => {
  try {
    const response = await axios.post(baseUrl, albumData);
    return response.data;
  } catch (err) {
    console.error("Error adding album:", err);
    throw err;
  }
};

export const getAlbums = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (err) {
    return null;
  }
};

const baseUrl2 = "https://apollofybackend2-production.up.railway.app/api/album/withTracks";

export const getAlbumsWithTracks = async () => {
  try {
    const response = await axios.get(baseUrl2);

    return response.data;
  } catch (err) {
    return null;
  }
};
