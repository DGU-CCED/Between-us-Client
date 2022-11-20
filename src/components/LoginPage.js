import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./LoginRegister.css"

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const navigate = useNavigate();
  
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
  }

  const onClickButton = () => {
    navigate('/register');
  }

  return (
      <div class="loginregister">
        <form class="form">
            <div class="title"><h2>로그인</h2></div>
            <div><input name="email" type="email" placeholder="이메일" value={email} onChange={onEmailHandler} class="loginregister__input"/></div>
            <div><input name="password" type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} class="loginregister__input"/></div>
            <div><button type="submit" onSubmit={onSubmit} class="loginregister__button">로그인</button></div>
            <div><button onClick={onClickButton} class="moveRegister">회원가입 이동</button></div>
        </form>
      </div>
    );
  }

export default LoginPage;