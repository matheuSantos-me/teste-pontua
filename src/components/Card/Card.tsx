import React from "react";

import { ICardComponentProps } from "./Card.interfaces";

import {
  ContainerSkeleton,
  Container,
  ContentImage,
  Label,
} from "./Card.styles";

export const CardComponent = ({ loading, label, url }: ICardComponentProps) => {
  if (loading) {
    return <ContainerSkeleton />;
  }

  if (!loading) {
    return (
      <Container>
        <ContentImage source={{ uri: url }} />

        {label?.length && (
          <Label>
            {label?.length >= 11 ? label.slice(0, 11).concat("...") : label}
          </Label>
        )}
      </Container>
    );
  }
};
