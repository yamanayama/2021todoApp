import { useState, useEffect } from "react";
import { ulid } from "ulid";
import {
  getAllTodosData,
  addTodoData,
  deleteTodoData,
  updateTodoData,
} from "../api/todos";

type Todo = {
  id: number;
  content: string;
  done: boolean;
};

//todolistを更新・消すための関数
export const useTodo = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]); //初期値は空の配列

  useEffect(() => {
    //getAllTodosDataを実行 thenの中身が入ってくる
    //returnの値が取れてくる
    getAllTodosData().then((todoList) => {
      setTodoList([...todoList]);
    });
  }, []); //[]は関する値が入る（関数とは限らない）

  const toggleTodoListItemStatus = (id: number) => {
    //todoListからtodoを見ていって、ユーザーの操作したidと等しいtodoのidを探すよ
    //一致するものは1つしかない
    const todoItem = todoList.find((todo) => todo.id === id);
    //todoListを上書きする　持ってきたオブジェクト（todo）のdoneを反転させる（trueならfalse.falseならtrueに）
    /// ... でオブジェクトの{}のなくす
    if (!!todoItem) {
      const newTodoItem = { ...todoItem, done: !todoItem.done };
      //このあととってきたデータを書き換えて返す
      updateTodoData(id, newTodoItem).then((updateTodo) => {
        //todolistには最初の更新されていない配列が入ってくる
        //とってきたtodoのidと、更新されたidが一致したら 新しい値を返し、その他は元の値を返す
        const newTodolist = todoList.map((todo) =>
          todo.id === updateTodo.id ? updateTodo : todo
        );
        setTodoList(newTodolist);
      });
    }
  };

  //todoContent:自分が更新したい文字列が入る
  const addTodoListItem = (todoContent: string) => {
    const newTodoItem = {
      id: Number(ulid()),
      content: todoContent,
      done: false,
    };
    addTodoData(newTodoItem).then((addTodoData) => {
      //[ hoge , ...foo]の中に書くとfooの配列にhogeを追加する
      const newTodoList = [addTodoData, ...todoList];
      setTodoList(newTodoList);
    });
  };

  return { toggleTodoListItemStatus, addTodoListItem, todoList };
};
