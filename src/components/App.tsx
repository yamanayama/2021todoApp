import React, { useRef } from "react";
import { TodoTitle } from "./TodoTitle";
import { TodoList } from "./TodoList";
import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./TodoAdd";

export const App = () => {
  const { deleteTodoListItem, toggleTodoListItemStatus, todoList, addTodoListItem } = useTodo();
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
      <TodoAdd addTodoListItem={addTodoListItem}/>
      <TodoTitle title="未完了TODOリスト" />
      <TodoList todoList={inCompeleteList} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem}/>

      <TodoTitle title="完了TODOリスト" />
      <TodoList todoList={compeleteList} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem}/>
    </div>
  );
};
