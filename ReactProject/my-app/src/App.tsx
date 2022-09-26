import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Title } from './components/Title';
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
    </div>
  );
} 

export default App;
