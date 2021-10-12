import React, { useState, useEffect } from "react";
import axios from "axios";
import { TodoList } from "./TodoTitle";

//{}一個分の型
type Todo = {
  id: number;
  content: string;
  done: boolean;
};

export const App = () => {
  const todoDataUrl = "http://localhost:3100/todos";
  const [todoList, setTodoList] = useState<Todo[]>([]); //空の配列を入れるよ Todoの要素を持った配列

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(todoDataUrl);
      setTodoList(response.data); //dataの配列だけをとってくるよ
    };
    fetchData(); //↑10-13では定義しただけ　←14行目で定義した関数を実行している
  }, []); //第2引数が空なので、1回しか実行されない
  //回数は指定できない　useEffectは2回目以降、第2引数の値を監視

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
      <TodoList title="未完了TODOリスト" />
      <div>
        <ul>
          {inCompeleteList.map((todo: Todo) => {
            return (
              <ul>
                <li>
                  {todo.content}（{todo.done ? "完了" : "未完了"}）
                </li>
              </ul>
            );
          })}
        </ul>
      </div>

      <TodoList title="完了TODOリスト" />
      <div>
        <ul>
          {compeleteList.map((todo: Todo) => {
            return (
              <ul>
                <li>
                  {todo.content}（{todo.done ? "完了" : "未完了"}）
                </li>
              </ul>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
