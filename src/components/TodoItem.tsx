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
  deleteTodoListItem: (id: number) => void;
}

export const TodoItem:FC<Props> = ({ todo, toggleTodoListItemStatus, deleteTodoListItem }) => {
  const handleToggleTodoListItemStatus = () => {
    toggleTodoListItemStatus(todo.id)
  }

  const handleDeleteTodoListItem = () => {
    deleteTodoListItem(todo.id)
  }
  
  return (
    <li>
      {todo.content}
      <button type="button" onClick={handleToggleTodoListItemStatus}>{todo.done ? "未完了へ" : "完了へ"}</button>
      <button type="button" onClick={handleDeleteTodoListItem}>削除する</button>
    </li>
  )
}
