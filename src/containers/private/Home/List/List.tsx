import React from "react";

import { CardComponent } from "../../../../components";

import { IListContainerProps, IListItemProps } from "./List.interfaces";

import { Container, Label, ContainerList } from "./List.styles";

export const ListContainer = ({
  label,
  loading,
  list,
}: IListContainerProps) => {
  const renderItem = ({ item }: { item: IListItemProps }) => (
    <CardComponent loading={loading} label={item?.name} url={item?.image} />
  );

  return (
    <Container>
      <Label>{label}</Label>

      <ContainerList
        data={loading ? [1, 2, 3, 4, 5] : list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};
