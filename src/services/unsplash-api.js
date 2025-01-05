import axios from "axios";

const API_KEY = "z39jGuLTmxhf2Wkk7aaySUoBGmtt3KiCb5xxY8waP_s";
const BASE_URL = "https://api.unsplash.com/search/photos";

export const fetchImages = async (query, page) => {
  const { data } = await axios.get(BASE_URL, {
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
    },
    params: {
      query,
      page,
      per_page: 12,
    },
  });
  return data;
};
