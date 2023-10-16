import React from "react";

interface IINPUTAlterrprops{
    placehoder:string;
    type?:string;
    
    className?:string;
    onChange: (newValue: string) => void;
}

export const InputAlterUser = React.forwardRef<HTMLInputElement, IINPUTAlterrprops>((props, ref ) => {
    return (
    <label>
        
        <input 
        placeholder={props.placehoder}
        ref={ref}
        
        type={props.type}
        className={props.className}
        onChange={e => props.onChange(e.target.value)}
        />
    </label>
    )
}) 