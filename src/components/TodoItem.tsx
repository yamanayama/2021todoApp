import { FC } from "react";

type Todo = {
  id: number;
  content: string;
  done: boolean;
};

type Props = {
  //一つしか渡さないので配列にしない
  todo: Todo;
}

export const TodoItem:FC<Props> = ({ todo }) => {
  return (
    <li>
      {todo.content}（{todo.done ? "完了" : "未完了"}）
    </li>
  )
}
