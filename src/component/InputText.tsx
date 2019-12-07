import * as React from 'react'

type InputTextProps= {
    text:string,
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void,
    inputRef:any
}

const InputText:React.FC<InputTextProps>=({text,handleChange,inputRef})=>{
    return (
        <input value={text} placeholder='請輸入' ref={inputRef} onChange={handleChange}/>
    )
}

export default InputText
