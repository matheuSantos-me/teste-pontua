import { useQuery } from "react-query";

import { HTTPClient } from "../../protocols/HTTPClient";

import { mapAndTransformData } from "../../utils/mapAndTransformData";

const getListComics = async () => {
  const response = await HTTPClient.get(`comics?limit=100`);

  const newData = mapAndTransformData(response.data.data.results);

  return newData;
};

export const useQueryListComicsService = () =>
  useQuery(["GetListComics"], () => getListComics());
