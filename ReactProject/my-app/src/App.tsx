import './App.css';
import { Button } from './components/Button';
import { Clicker } from './components/Clicker';
import { EmojiList } from './components/emojiList';
import { Input } from './components/Input';
import { PostList } from './components/PostList';
import { Title } from './components/Title';
import { TodoList } from './components/TodoList/List';
import { UserName } from './components/User';

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
      <Input value ="Logo"/>
      <Title text="good day"/> 
      <UserName userName="John" isDark={false}/>
      <Clicker />
      <TodoList />
      <PostList />
      <EmojiList /> 
    </div>
  );
} 

export default App;
