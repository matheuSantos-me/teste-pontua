export interface IListItemProps {
  id: number;
  name: string;
  image: string;
}

export interface IListContainerProps {
  label: string;
  loading: boolean;
  list: IListItemProps[];
}
