import React from "react";

interface IINPUTRegisterprops{
    placehoder:string;
    type?:string;
    value:string;
    className?:string;
    onChange: (newValue: string) => void;
}

export const InputRegister = React.forwardRef<HTMLInputElement, IINPUTRegisterprops>((props, ref ) => {
    return (
    <label>
        
        <input 
        placeholder={props.placehoder}
        ref={ref}
        value={props.value}
        type={props.type}
        className={props.className}
        onChange={e => props.onChange(e.target.value)}
        />
    </label>
    )
}) 