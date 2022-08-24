import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/Batton';
import { Input } from './components/Input';


function App() {
  const onClickLogin = () => {
    alert("Login");
  };

  const onClickSignUp = () => {
    alert("SignUp");
  };

  const onClickLogout = () => {
    alert("Logout");
  };

  return (
    <div className="App">
      <Button text="Login" onClick={onClickLogin} />
      <Button text="Sign up" onClick={onClickSignUp} />
      <Button text="Logout" onClick={onClickLogout} />
      <Input value="Ваше имя"/>
      <Input value="Ваш возраст"/>
      <Input value="Ваш пол"/>
    </div>
  );
}

export default App;

