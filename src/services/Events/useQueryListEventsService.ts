import { useQuery } from "react-query";

import { HTTPClient } from "../../protocols/HTTPClient";

import { mapAndTransformData } from "../../utils/mapAndTransformData";

const getListEvents = async () => {
  const response = await HTTPClient.get(`events?limit=100`);

  const newData = mapAndTransformData(response.data.data.results);

  return newData;
};

export const useQueryListEventsService = () =>
  useQuery(["GetListEvents"], () => getListEvents());
