import style from"./style.module.css";

interface UserProps{
    userName: string;
    isDark: boolean;
}



export const UserName = (props: UserProps) => {
    const initial = props.userName.split("");

    return (
        <div className={`${style.mainDiv} ${props.isDark ? style.nameDark : ""}`}>
            <div className={style.initial}>
                {initial[0][0].toUpperCase()}
                {initial[1] ? initial[1][0].toUpperCase() : "" }
            </div>
            <p className={style.name}>{props.userName}
            </p>
        </div>
    );
}