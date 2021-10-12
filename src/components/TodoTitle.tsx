import React, { FC } from "react";

type Props = {
  title: string;
};

export const TodoTitle: FC<Props> = ({ title }) => {
  return <h2>{title}</h2>;
};
