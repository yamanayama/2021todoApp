import axios from "axios";

const todoDataUrl = "http://localhost:3100/todos";

//全部のtodoを取得する
export const getAllTodosData = async () => {
  const response = await axios.get(todoDataUrl);
  return response.data;　// objectとして dataがかえってくる
}

//追加する
//一つのtodoを返すので単数系
export const addTodoData = async (todo) => {
  const response = await axios.post(todoDataUrl, todo);
  return response.data;//新しい配列を追加した分が帰ってくる　新しいTodoListを追加したイメージ
}

//削除
export const deleteTodoData = async (id) => {
  await axios.delete(`${todoDataUrl}` / `${id}`)
  return id;
}

//更新
export const updateTodoData = async (id, todo) => {
  const response = await axios.put(`${todoDataUrl}` / `${id}`, todo);
  return response.data;
}

//getAllTodosData();で呼び出す
