import React, {useState} from 'react';
import styled from 'styled-components';
import { Route, Link, useNavigate } from 'react-router-dom';

const Styled = styled.div`
    color: white;
    .hackathonList{
        list-style: none;
        margin-bottom: 10vh;
    }
    .linkStyle{
        text-decoration: none;
    }
`;

const HackathonList = () =>{
    const [posts, setPosts] = useState([
        {id: 1, title: "더미111", date: "2022-11-25"},
        {id: 2, title: "더미222", date: "2022-11-26"},
        {id: 3, title: "더미333", date: "2022-11-27"},
    ]);
    const navigate = useNavigate();

    const hackathonList = posts.map((post) => 
        <li key={post.id} className="hackathonList">
            <p>{post.title}</p>
            <p>{post.date}</p>
            <Link to={'/login'} className="linkStyle" style={{textDecoration: 'none', color: 'white'}} >이동 테스트...(클릭)</Link>
        </li>
    )

    return (
        <>
        <Styled>
            {hackathonList}
        </Styled>
        </>
    )
}

export default HackathonList;