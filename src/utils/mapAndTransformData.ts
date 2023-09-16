interface IDataProps {
  id: number;
  name?: string;
  title?: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export const mapAndTransformData = (results: IDataProps[]) => {
  return results.map((i: IDataProps) => ({
    id: i.id,
    name: i.name || i.title,
    image: `${i.thumbnail.path}.${i.thumbnail.extension}`,
  }));
};
