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
    checked: boolean;
}

export const TodoList = () => {
    const [text, setText] = useState("")
    const [todos, setTodos] = useState<ITodo[]>([])

    const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(event.target.value);
        setText(event.target.value);
    }

    const addTodo = () => {
        // if(text.length < 1) {
        //     alert("Ошибка")
        //     return
        // }

        ///1. собрать объект новой тудушки
        const newTodo = {
            text: text,
            id: generateUniqId(),
            checked: false,
        };

        ///2. добавить новую тудушку в массив
        const newTodos1 = todos.concat([newTodo]);
        //2. const newTodos2 = [...todos, newTodo];
        //3. const clonedTodos = [...todos];
        // clonedTodos.push(newTodo)

        ///3. выполнить функцию setTodos с новым массивом 
        setTodos(newTodos1);
        setText("");

    }

        const removeTodo = (id:string) => {
            ///1. фильтруем исходный массив
            const newTodos = todos.filter((item) =>{
                if(item.id === id) {
                    return false;
                }

                return true;
            })
            ///2.выполнить setTodos с массивом newTodos
            setTodos(newTodos);
        }

        const checkTodo = (id: string) => {
            ///1. изменяем текущий массив, изменяем свойство checked у тудушки с id
            const newTodos = todos.map((item) => {
                if (item.id === id) {
                    //1
                    if(item.checked) {
                    item.checked = false;
                    } else {
                    item.checked = true;   
                    }

                    ///

                    //2
                    // item.checked = !item.checked
                    //

                    return item;
                }

                return item;
                })
            ///2.выполнить setTodos с массивом newTodos
            setTodos(newTodos);
            }

    return (
        <div>
            <div className={style.button}>
            <Input value={text} onChange={handleOnChange} />
            {text.length > 1 ? (
            <Button 
            type="primary" 
            text="ado" 
            onClick={addTodo} 
            disabled={text.length < 1}/>
            ) : null}
            </div>
            {todos.map((item) => {
                const onClickRemove = () => {
                    removeTodo(item.id);
                };

                const onClickChecked = () => {
                    checkTodo(item.id);
                };

                return (
                    <Item 
                        key={item.id} 
                        checked={item .checked} 
                        text={item.text} 
                        onClickRemove={onClickRemove} 
                        onClickChecked={onClickChecked}/>
                )
            })}
        </div>
        )
    }