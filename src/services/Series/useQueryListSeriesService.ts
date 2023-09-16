import { useQuery } from "react-query";

import { HTTPClient } from "../../protocols/HTTPClient";

import { mapAndTransformData } from "../../utils/mapAndTransformData";

const getListSeries = async () => {
  const response = await HTTPClient.get(`series?limit=100`);

  const newData = mapAndTransformData(response.data.data.results);

  return newData;
};

export const useQueryListSeriesService = () =>
  useQuery(["GetListSeries"], () => getListSeries());
