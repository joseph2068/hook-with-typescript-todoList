import React, { useState,useRef} from 'react'
import InputTextComponent from '../component/InputText'

interface ITodo {
    value: string
  }

const InputText:React.FC = () => {
    const [text, setText] = useState<string>('');
    const [list, setList] = useState<ITodo[]>([]);
    const inputRef = useRef<HTMLInputElement>(null)
    
    const inputChange:React.ChangeEventHandler<HTMLInputElement> =(event)=>{
        console.log('value',event.target.value)
        setText(event.target.value)
      }
    const inputSave = (inputValue:React.RefObject<HTMLInputElement>)=>{
        if (inputValue && inputValue.current){
        const value = inputValue.current.value
        const newTodo = [...list,{value:value}]
        setList(newTodo)
        setText('')
    }
    }

    const deleteList:React.MouseEventHandler<HTMLButtonElement>= (event)=>{
       event.preventDefault()
       if(list.length > 0 && event){
       const selectKey = Number(event.currentTarget.getAttribute('data-key'))
       const newTodo=list.filter((item,index)=>{
           return index !== selectKey
       })
       setList(newTodo)
    }
    }
    console.log('list',list)
    return (
        <div>
            <InputTextComponent text={text} inputRef={inputRef} handleChange={inputChange}/>
            <button onClick={()=>inputSave(inputRef)}>+</button>
            <ul>
            {list.length > 0 &&  list.map((item,index)=>(
            <li key={index}>
            <span>{item.value}</span>
            <button data-key={index} onClick={deleteList}>X</button>
            </li>))}
            </ul>
        </div>
    )
}

export default InputText