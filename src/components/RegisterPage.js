import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./LoginRegister.css"

function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const navigate = useNavigate();

  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
  }
  const onEmailHandler = (event) => {
      setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
      setPassword(event.currentTarget.value)
  }

  const onConfirmPasswordHandler = (event) => {
      setConfirmPassword(event.currentTarget.value)
  }

  const onClickButton = (event) => {
    
    navigate('/login');
  }

  return (
    <div class="loginregister">
      <form class="form">
          <div class="title"><h2>회원가입</h2></div>
          <div><input name="name" type="text" placeholder="이름" value={name} onChange={onNameHandler} class="loginregister__input"/></div>
          <div><input name="email" type="email" placeholder="이메일" value={email} onChange={onEmailHandler} class="loginregister__input"/></div>
          <div><input name="password" type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} class="loginregister__input"/></div>
          <div><input name="confirmPassword" type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={onConfirmPasswordHandler} class="loginregister__input"/></div>
          <div><button type="submit" onClick={onClickButton} class="moveRegister">회원가입 완료</button></div>
      </form>
    </div>
  );
}
export default RegisterPage;
