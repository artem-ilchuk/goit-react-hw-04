import axios from "axios";

const API_KEY = "z39jGuLTmxhf2Wkk7aaySUoBGmtt3KiCb5xxY8waP_s";
const BASE_URL = "https://api.unsplash.com/";

export const fetchImages = async (params) => {
  const { data } = await axios.get(
    { BASE_URL },
    {
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
      params,
    }
  );
  return data;
};
