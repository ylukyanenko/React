import { PostItem } from "../PostItem";
import style from "./style.module.css";

export const PostList = () => {
    const posts = [
        {
            id: 0,
            image: "https://naked-science.ru/sites/default/files/images/5_189.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat natus totam eveniet.",
            date: "2021-12-12",
            lesson_num: 0,
            title: "Lorem ipsum dolor sit.",
            author: 0,
        },
        {
            id: 1,
            image: "https://naked-science.ru/sites/default/files/images/5_189.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat natus totam eveniet.",
            date: "2021-12-12",
            lesson_num: 0,
            title: "Lorem ipsum dolor sit.",
            author: 0,
        },
        {
            id: 2,
            image: "https://naked-science.ru/sites/default/files/images/5_189.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat natus totam eveniet.",
            date: "2021-12-12",
            lesson_num: 0,
            title: "Lorem ipsum dolor sit.",
            author: 0,
        },
        {
            id: 3,
            image: "https://naked-science.ru/sites/default/files/images/5_189.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat natus totam eveniet.",
            date: "2021-12-12",
            lesson_num: 0,
            title: "Lorem ipsum dolor sit.",
            author: 0,
        },
        {
            id: 4,
            image: "https://naked-science.ru/sites/default/files/images/5_189.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat natus totam eveniet.",
            date: "2021-12-12",
            lesson_num: 0,
            title: "Lorem ipsum dolor sit.",
            author: 0,
        },
        {
            id: 5,
            image: "https://naked-science.ru/sites/default/files/images/5_189.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat natus totam eveniet.",
            date: "2021-12-12",
            lesson_num: 0,
            title: "Lorem ipsum dolor sit.",
            author: 0,
        }
    ];
    return ( 
        <div className={style.contauner}>
        {posts.map((item) => (
            <PostItem
            key={item.id}
            id={item.id}
            image={item.image}
            text={item.text}
            date={item.date}
            lesson_num={item.lesson_num}
            title={item.title}
            author={item.author}
            />
        ))}
        </div>
        );
};