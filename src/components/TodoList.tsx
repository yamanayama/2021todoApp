import React, { FC } from "react";

//Propsで指定するためにTodoの配列のプロパティの型を指定
type Todo = {
  id: number;
  content: string;
  done: boolean;
};

type Props = {
  todoList: Todo[]; // hoge[]　で配列
};

export const TodoList: FC<Props> = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((todo: Todo) => {
        return (
          <li key={todo.id}>
            {todo.content}（{todo.done ? "完了" : "未完了"}）
          </li>
        );
      })}
    </ul>
  );
};
