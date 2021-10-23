import React, { useRef } from "react";
import { TodoTitle } from "./TodoTitle";
import { TodoList } from "./TodoList";
import { useTodo } from "../hooks/useTodo";

export const App = () => {
const { todoList, addTodoListItem } = useTodo();
  //未完了リスト
  const inCompeleteList = todoList.filter((todo) => !todo.done);

  //完了リスト
  // const compeleteList = todoList.filter((todo) => {
  //   return todo.done === true
  // })
  const compeleteList = todoList.filter((todo) => todo.done);
  const inputEl = useRef<HTMLTextAreaElement>(null!);//初期値はnull 最初は動かしたくない、押された時だけ・・監視する
  const handleAddTodoListItem = () => {
    //useRefで監視する時は必ずcurrentをつける
    //inputEl.current?.value textareaの中身
    if(inputEl.current.value){
      //valueがある時だけTODOに追加する
      addTodoListItem(inputEl.current.value);
    } else {
      return
    }
    //TEXTAREAの中身を空にする
    inputEl.current.value = "";
  }

  return (
    <div>
      <h1>🧡TODO進捗管理🧡</h1>
      <textarea ref={inputEl} />
      <button onClick={handleAddTodoListItem} type="button">追加</button>
      <TodoTitle title="未完了TODOリスト" />
      <TodoList todoList={inCompeleteList} />

      <TodoTitle title="完了TODOリスト" />
      <TodoList todoList={compeleteList} />
    </div>
  );
};
