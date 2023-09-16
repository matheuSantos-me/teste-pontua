import axios from "axios";
import md5 from "crypto-js/md5";

export const HTTPClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_BASE_URL,
});

HTTPClient.interceptors.request.use(
  async (config) => {
    const ts = new Date().getTime();
    const hash = md5(
      `${ts}${process.env.EXPO_PUBLIC_API_PRIVATE_KEY}${process.env.EXPO_PUBLIC_API_PUBLIC_KEY}`
    );

    config.params = {
      ts,
      apikey: process.env.EXPO_PUBLIC_API_PUBLIC_KEY,
      hash,
    };

    return config;
  },
  (response) => Promise.reject(response)
);
