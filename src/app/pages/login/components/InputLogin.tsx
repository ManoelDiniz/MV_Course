import React from "react";


interface IInputLoginProps {
    label: string;
    value: string;
    type?:string
    onChange: (newValue: string) => void;
    onPressEnter?: () => void;
    className?:string
}
export const InputLogin =  React.forwardRef<HTMLInputElement, IInputLoginProps>((props, ref) => {
    return (
    <label>
        
        <span>{props.label}</span>
        <input
        ref={ref}
        value={props.value}
        type={props.type}  
        onKeyDown={e => e.key === 'Enter' ?
        props.onPressEnter && props.onPressEnter() : undefined}
        onChange={ e =>props.onChange(e.target.value)}
        className={props.className}/>
    </label>    
)})