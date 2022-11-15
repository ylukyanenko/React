import { ChangeEventHandler, useState } from "react";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { Item } from "../Item";
import style from "./style.module.css";

const generateUniqId = () => {
    return "_" + Math.random().toString(16).slice(2)
}

const todos = [
    {text: 'Test', id: generateUniqId() },
    {text: 'Test1', id: generateUniqId() },
    {text: 'Test2', id: generateUniqId() },
    {text: 'Test3', id: generateUniqId() },
    {text: 'Test', id: generateUniqId() },
]

interface ITodo{
    id:string;
    text:string;
}

export const TodoList = () => {
    const [text, setText] = useState("")
    const [todos, setTodos] = useState<ITodo[]>([])

    const handLeOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(event.target.value);
        setText(event.target.value);
    }

    const addTodo = () => {
        ///1. собрать объект новой тудушки
        const newTodo = {
            text: text,
            id: generateUniqId()
        };
        ///2. добавить новую тудушку в массив
        const newTodos1 = todos.concat([newTodo]);
        //2. const newTodos2 = [...todos, newTodo];
        //3. const clonedTodos = [...todos];
        // clonedTodos.push(newTodo)

        ///3. выполнить функцию setTodos с новым массивом 
        setTodos(newTodos1);

    }

        const removeTodo = (id:string) => {
            ///1. фильтруем исходный массив
            const newTodos = todos.filter(item =>{
                if(item.id === id) {
                    return false;
                }
                return true;
            })
            ///2.выполнить setTodos с массивом newTodos
            setTodos(newTodos);
        }

    return (
        <div>
            <div className={style.button}>
            <Input value={text} onChange={handLeOnChange} />
            <Button type="primary" text="ado" onClick={addTodo} />
            </div>
            {todos.map((item) => {
                const onClickRemove = () => {
                    removeTodo(item.id);
                }
                return <Item key={item.id} text={item.text} onClickRemove={onClickRemove} />;
            })}
        </div>
    );
};
