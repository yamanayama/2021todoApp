import React, { useState, useEffect } from "react";
import axios from "axios";

export const App = () => {
  const todoDataUrl = "http://localhost:3100/todos";
  const [todoList, setTodoList] = useState<any>([]); //空の配列を入れるよ

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(todoDataUrl);
      setTodoList(response.data); //dataの配列だけをとってくるよ
    };
    fetchData(); //↑10-13では定義しただけ　←14行目で定義した関数を実行している
  }, []); //第2引数が空なので、1回しか実行されない
  //回数は指定できない　useEffectは2回目以降、第2引数の値を監視

  return (
    <>
      <h1>🧡TODO進捗管理🧡</h1>
      <textarea />
      <button type="button">追加</button>
      <h2>TODOリスト</h2>
      <div>
        <ul>
          {todoList.map((todo: any) => {
            return (
              <div>
                <li>{todo.content}</li>
                <p>{todo.id}</p>
                {todo.done && "trueだよ"}
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
