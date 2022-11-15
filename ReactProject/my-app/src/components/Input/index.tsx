import { ChangeEventHandler } from "react";
import style from"./style.module.css";

interface IProps{
    value: string;
    placeholder?: string;
    onChange:ChangeEventHandler<HTMLInputElement>;
}

export const Input = (props: IProps) => {
    return ( 
    <input 
        className={style.input} 
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}>
    </input>
    );
};
