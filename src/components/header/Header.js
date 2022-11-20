import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {Button} from "reactstrap";
import {FaBars} from "react-icons/fa";

const StyledHeader = styled.header`
  background-color: #1e1e1e;
  width: 100%;
  padding: 10px 12px 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .nav_logo {
    padding: 0 12px;
    .nav-logo-link {
      text-decoration: none;
      font-size: 24px;
      color: #fab005;
      font-weight: bold;
    }
  }
  .menuToggleBtn {
    display: none;
    color: white;
    font-size: 24px;
    position: absolute;
    right: 20px;
    top: 15px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    .menuToggleBtn {
      display: block;
    }
  }
`;
const NavManu = styled.ul`
  list-style: none;
  display: flex;
  margin: 0 auto;

  li {
    &:hover {
      cursor: pointer;
      background: #44a8f4;
      border-radius: 4px;
    }
  }
  .nav-menu-list {
    text-decoration: none;
    color: white;
    display: block;
    padding: 10px 10px;
    font-size: 30px;
  }
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isToggleOpen ? "block" : "none")};
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 5px;
  }
`;

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };
  return (
    <>
      <StyledHeader>
        <div className="nav_logo">
          <Link to={"/"} className="nav-logo-link">
            Our42
          </Link>
        </div>

        <NavManu isToggleOpen={isToggleOpen}>
          <li>
            <Link to={"/management"} className="nav-menu-list">
              대회관리
            </Link>
          </li>
          <li>
            <Link to={"/home"} className="nav-menu-list">
              우리 사이
            </Link>
          </li>
          <li>
            <Link to={"/mypage"} className="nav-menu-list">
              마이페이지
            </Link>
          </li>
          <li>
            <Link to={"/login"} className="nav-menu-list">
              로그인/회원가입
            </Link>
          </li>
        </NavManu>
        <FaBars buttonStyle='btn--outline' className="menuToggleBtn" onClick={handleToggleOpen}>Menu</FaBars>
      </StyledHeader>
    </>
  );
};

export default Header;