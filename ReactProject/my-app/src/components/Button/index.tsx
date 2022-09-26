import { type } from "os";
import style from"./style.module.css";

interface Props{
    text: string;
    type: 'primary' | 'secondary' | 'secondary2';
    disabled?: boolean;
    onClick: () => void;
}

const getButtonStyle = ( type: 'primary' | 'secondary' | 'secondary2') => {
    if(type === 'primary') {
        return style.primary
    }

    if (type === 'secondary') {
        return style.secondary
    }

    if (type === 'secondary2'){
        return style.secondary2
    }
}

export const Button = (props: Props) => {
    return ( 
    <button className={`${style.button} ${getButtonStyle(props.type)}`} 
    disabled={props.disabled} 
    onClick={props.onClick}>

    {props.text}  
    </button>
    );
};


