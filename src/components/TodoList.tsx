import React, { FC } from "react";
import { TodoItem } from "./TodoItem"

//Propsで指定するためにTodoの配列のプロパティの型を指定
type Todo = {
  id: number;
  content: string;
  done: boolean;
};

type Props = {
  // hoge[]　で配列
  todoList: Todo[]; 
  //idを引数としてvoidと返り値とした型（関数）
  toggleTodoListItemStatus: (id: number) => void;
  deleteTodoListItem: (id: number) => void;
};

export const TodoList: FC<Props> = ({ todoList, toggleTodoListItemStatus, deleteTodoListItem }) => {
  return (
    <ul>
      {todoList.map((todo: Todo) => {
        return (
          <TodoItem key={todo.id} todo={todo} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem}/>
        );
      })}
    </ul>
  );
};
