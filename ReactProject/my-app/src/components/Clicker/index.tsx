import { Component, useState } from "react"
import { Button } from "../Button"
import style from "./stule.module.css";

export const Clicker = () => {

    const [clickCount, setClickCount] = useState(0);

    // if (clickCount === 10) {
    //     return <h1>yoohooo</h1>
    // }

    const onClickPlus = () => {
        setClickCount(clickCount+1);
    }

    const onClickMinus = () => {
        setClickCount(clickCount-1);
    }

    const reset = () => {
        setClickCount(0);
    }

    return (
    <div>
        {/* {условие ? тру компонент : не тру компонент} */}
        {/* {clickCount === 10 ? <h1>Хватит кликать</h1> : null} */}
        {/* {clickCount === 10 ? <h1>Хватит кликать</h1> : <h1>Кликай быстрее</h1>} */}
        <h2>{clickCount}</h2>
        {clickCount === 10 && <h1>Хватит кликать</h1>}
        {clickCount >= 10 ? "" :  <Button text={"+"} onClick={onClickPlus} type="primary" />}
        {clickCount <= 0 ? "" : <Button text={"-"} onClick={onClickMinus} type="primary"/>}
        {/* <Button text={"+"} onClick={onClickPlus} type="primary"/> */}
        {/* <Button text={"-"} onClick={onClickMinus} type="primary"/> */}
        <Button text={"reset"} onClick={reset} type="primary"/>
    </div>
    );
}
