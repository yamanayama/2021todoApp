import React, { FC, useState } from "react";

type Props = {
  title: string;
};

export const TodoList: FC<Props> = ({ title }) => {
  return <h2>{title}</h2>;
};
