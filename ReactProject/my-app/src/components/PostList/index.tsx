import { IPost } from "../../types/post";
import { PostItem } from "../PostItem";
import style from "./style.module.css";

interface IProps{
    posts: IPost[];
}

export const PostList = (props:IProps) => {
    return ( 
        <div className={style.container}>
        {props.posts.map((item) => (
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