import React from "react";
import { TodoTitle } from "./TodoTitle";
import { TodoList } from "./TodoList";
import { useTodo } from "../hooks/useTodo";

export const App = () => {
  const { todoList } = useTodo();
  //未完了リスト
  const inCompeleteList = todoList.filter((todo) => !todo.done);

  //完了リスト
  // const compeleteList = todoList.filter((todo) => {
  //   return todo.done === true
  // })
  const compeleteList = todoList.filter((todo) => todo.done);

  return (
    <div>
      <h1>🧡TODO進捗管理🧡</h1>
      <textarea />
      <button type="button">追加</button>
      <TodoTitle title="未完了TODOリスト" />
      <TodoList todoList={inCompeleteList} />

      <TodoTitle title="完了TODOリスト" />
      <TodoList todoList={compeleteList} />
    </div>
  );
};
