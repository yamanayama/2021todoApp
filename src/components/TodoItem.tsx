import { FC } from "react";


type Todo = {
  id: number;
  content: string;
  done: boolean;
};

type Props = {
  //一つしか渡さないので配列にしない
  todo: Todo;
  toggleTodoListItemStatus: (id: number) => void;
}

export const TodoItem:FC<Props> = ({ todo, toggleTodoListItemStatus }) => {
  const handleToggleTodoListItemStatus = () => {
    toggleTodoListItemStatus(todo.id)
  }
  
  return (
    <li>
      {todo.content} <button type="button" onClick={handleToggleTodoListItemStatus}>{todo.done ? "未完了へ" : "完了へ"}</button>
    </li>
  )
}
