import { FC, useRef } from "react";

type Props = {
  addTodoListItem: (todoContent: string) => void;
}

export const TodoAdd:FC<Props> = ({ addTodoListItem }) => {
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

  return(
    <>
      <textarea ref={inputEl} />
      <button onClick={handleAddTodoListItem} type="button">追加</button>
    </>
  )
}