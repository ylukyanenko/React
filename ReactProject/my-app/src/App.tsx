import './App.css';
import { AllPosts } from './components/AllPosts';
import { Button } from './components/Button';
import { Clicker } from './components/Clicker';
import { Converter } from './components/Converter';
import { EmojiList } from './components/emojiList';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { Login } from './components/Login';
import { PostList } from './components/PostList';
import { RegistrationForm } from './components/RgistrationForm';
import { Time } from './components/Time';
import { Timer } from './components/Timer';
import { Title } from './components/Title';
import { TodoList } from './components/TodoList/List';
import { UserName } from './components/User';

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

function App() {
  const onClickLogin = () =>{
    alert("Login");
  };

  const onClickSignUp = () =>{
    alert("Sign up");
  };

  const onClickLogout = () =>{
    alert("Logout");
  };

  return (
    <div className="App">
      <Button text="Login" onClick={onClickLogin} type="primary"/>
      <Button text="Sign up" onClick={onClickSignUp} type="secondary"/>
      <Button text="Logout" onClick={onClickLogout} type="secondary2" />
      {/* <Input value ="Logo"/> */}
      {/* <Title text="good day"/> 
      <UserName userName="John" isDark={false}/>
      <Clicker />
      <TodoList />
      <PostList posts={posts}/> */}
      {/* <EmojiList /> */}
      {/* <AllPosts />  */}
      {/* <Login /> */}
      <Header />
      <Converter />
      <RegistrationForm />
      <Time />
      <Timer />


    </div>
  );
} 

export default App;
