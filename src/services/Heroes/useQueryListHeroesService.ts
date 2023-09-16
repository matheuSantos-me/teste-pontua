import { useQuery } from "react-query";

import { HTTPClient } from "../../protocols/HTTPClient";

import { mapAndTransformData } from "../../utils/mapAndTransformData";

const getListHeroes = async () => {
  const response = await HTTPClient.get(`characters?limit=100`);

  const newData = mapAndTransformData(response.data.data.results);

  return newData;
};

export const useQueryListHeroesService = () =>
  useQuery(["GetListHeroes"], () => getListHeroes());
